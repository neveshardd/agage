import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BACKOFFICE_API_URL } from "@/lib/backoffice";
import { DEFAULT_IMAGES, isImageKey, type SiteImages } from "./images";

/** Alterações salvas no backoffice aparecem no site em até 1 minuto. */
const REVALIDATE_SECONDS = 60;

interface SiteContentOverrides {
  /** Caminho no dicionário ("hero.slides.0.heading") → texto. */
  texts: Record<string, string>;
  /** Chave do slot ("about.image") → URL da imagem enviada. */
  images: Record<string, string>;
}

function isStringRecord(value: unknown): value is Record<string, string> {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.values(value).every((item) => typeof item === "string")
  );
}

/** Busca as alterações do idioma; `null` se a API estiver indisponível (o site usa o padrão). */
export async function fetchSiteContent(
  locale: Locale,
): Promise<SiteContentOverrides | null> {
  try {
    const response = await fetch(
      `${BACKOFFICE_API_URL}/api/public/site-content?locale=${locale}`,
      { next: { revalidate: REVALIDATE_SECONDS, tags: ["site-content"] } },
    );
    if (!response.ok) return null;
    const body: unknown = await response.json();
    if (typeof body !== "object" || body === null) return null;
    const { texts, images } = body as Record<string, unknown>;
    if (!isStringRecord(texts) || !isStringRecord(images)) return null;
    return { texts, images };
  } catch {
    return null;
  }
}

/**
 * Aplica os textos sobre uma cópia do dicionário. Só substitui caminhos que já existem e que são
 * texto: chaves desconhecidas ou antigas são ignoradas, e o formato do dicionário nunca muda.
 */
export function applyTextOverrides(
  dictionary: Dictionary,
  texts: Record<string, string> | undefined,
): Dictionary {
  if (!texts || Object.keys(texts).length === 0) return dictionary;
  const result = structuredClone(dictionary);

  for (const [path, value] of Object.entries(texts)) {
    const segments = path.split(".");
    const last = segments.pop();
    if (!last || value.trim() === "") continue;
    let node: unknown = result;
    for (const segment of segments) {
      node =
        typeof node === "object" && node !== null
          ? (node as Record<string, unknown>)[segment]
          : undefined;
    }
    if (typeof node !== "object" || node === null) continue;
    const parent = node as Record<string, unknown>;
    if (Object.hasOwn(parent, last) && typeof parent[last] === "string") {
      parent[last] = value;
    }
  }
  return result;
}

/** URLs finais dos slots: as enviadas pelo backoffice substituem os arquivos padrão. */
export function resolveImages(
  images: Record<string, string> | undefined,
): SiteImages {
  const result = { ...DEFAULT_IMAGES };
  for (const [key, url] of Object.entries(images ?? {})) {
    if (isImageKey(key) && url.startsWith(`${BACKOFFICE_API_URL}/`)) {
      result[key] = url;
    }
  }
  return result;
}
