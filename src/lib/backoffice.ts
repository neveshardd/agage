/**
 * Usado apenas por Server Components (sem segredos: a API é pública).
 *
 * Cliente da API pública do backoffice (api.agage.com.br). Só retorna conteúdo publicado:
 * vídeos publicados e documentos vigentes. Em caso de falha, devolve `null` para que a página
 * exiba um aviso em vez de quebrar.
 */
export const BACKOFFICE_API_URL = (
  process.env.AGAGE_API_URL ?? "https://api.agage.com.br"
).replace(/\/$/, "");

/** Conteúdo atualizado no backoffice aparece no site em até 1 minuto. */
const REVALIDATE_SECONDS = 60;

export type PublicArea = "onboarding" | "occupational-safety" | "institutional";

export interface PublicVideo {
  id: string;
  title: string;
  mimeType: string;
  url: string;
}

export interface PublicDocument {
  id: string;
  code: string;
  title: string;
  revision: string;
  fileSize: number;
  updatedAt: string;
  url: string;
  downloadUrl: string;
}

export interface AreaContent {
  video: PublicVideo | null;
  documents: PublicDocument[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function parseVideo(value: unknown): PublicVideo | null {
  if (!isRecord(value)) return null;
  const { id, title, mimeType, url } = value;
  if (
    !isString(id) ||
    !isString(title) ||
    !isString(mimeType) ||
    !isString(url)
  )
    return null;
  return { id, title, mimeType, url };
}

function parseDocument(value: unknown): PublicDocument | null {
  if (!isRecord(value)) return null;
  const { id, code, title, revision, fileSize, updatedAt, url, downloadUrl } =
    value;
  if (
    !isString(id) ||
    !isString(code) ||
    !isString(title) ||
    !isString(revision) ||
    typeof fileSize !== "number" ||
    !isString(updatedAt) ||
    !isString(url) ||
    !isString(downloadUrl)
  ) {
    return null;
  }
  return { id, code, title, revision, fileSize, updatedAt, url, downloadUrl };
}

/** Valida a resposta: a API é de outro deploy e não deve ser confiada às cegas. */
function parseAreaContent(body: unknown): AreaContent | null {
  if (!isRecord(body) || !Array.isArray(body.documents)) return null;
  return {
    video: parseVideo(body.video),
    documents: body.documents
      .map(parseDocument)
      .filter((document): document is PublicDocument => document !== null),
  };
}

export async function getAreaContent(
  area: PublicArea,
): Promise<AreaContent | null> {
  try {
    const response = await fetch(
      `${BACKOFFICE_API_URL}/api/public/areas/${area}`,
      {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: { Accept: "application/json" },
      },
    );
    if (!response.ok) return null;
    return parseAreaContent(await response.json());
  } catch {
    return null;
  }
}
