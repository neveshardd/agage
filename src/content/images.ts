/**
 * Slots de imagem do site. Cada imagem tem uma chave estável, o rótulo exibido no backoffice, a
 * seção (ver `sections.ts`) e o arquivo padrão em `public/`. O backoffice pode substituir qualquer
 * slot; os componentes leem a URL final em `images[chave]` (`getI18n()` / `useI18n()`).
 *
 * Não renomeie chaves existentes: as imagens enviadas pelo backoffice ficam associadas a elas.
 */
import type { ProjectId } from "@/i18n/dictionaries";

interface ImageSlot {
  readonly section: string;
  readonly label: string;
  readonly default: string;
}

const slot = (section: string, label: string, file: string): ImageSlot => ({
  section,
  label,
  default: file,
});

export const IMAGE_SLOTS = {
  "brand.logo": slot("common", "Logo da AGAGE (navbar e rodapé)", "/agage.png"),
  "meta.ogImage": slot(
    "meta",
    "Imagem de compartilhamento (redes sociais)",
    "/mao-de-obra.jpg",
  ),

  "navbar.privacy": slot(
    "navbar",
    "Mega menu — Política de Privacidade",
    "/viaduto02.jpg",
  ),
  "navbar.safety": slot(
    "navbar",
    "Mega menu — Segurança do trabalho",
    "/equipe-talude.jpg",
  ),
  "navbar.documents": slot(
    "navbar",
    "Mega menu — Documentos",
    "/engenheiros-projeto.jpg",
  ),

  "hero.poster": slot(
    "hero",
    "Pôster do vídeo (primeiro quadro)",
    "/hero-poster.jpg",
  ),
  "about.image": slot("about", "Foto de Quem somos", "/quem-somos.jpg"),
  "certifications.background": slot(
    "certifications",
    "Foto de fundo",
    "/obra-aerea.jpg",
  ),
  "certifications.badge.clt": slot(
    "certifications",
    "Selo 1",
    "/certificados/clt.png",
  ),
  "certifications.badge.esg": slot(
    "certifications",
    "Selo 2",
    "/certificados/esg.png",
  ),
  "certifications.badge.legal": slot(
    "certifications",
    "Selo 3",
    "/certificados/legal.png",
  ),
  "certifications.badge.lgpd": slot(
    "certifications",
    "Selo 4",
    "/certificados/lgpd.png",
  ),
  "certifications.badge.safety": slot(
    "certifications",
    "Selo 5",
    "/certificados/safety.png",
  ),
  "certifications.badge.mulher": slot(
    "certifications",
    "Selo 6",
    "/certificados/mulher.png",
  ),
  "skilledLabor.image": slot(
    "skilledLabor",
    "Foto de fundo",
    "/mao-de-obra.jpg",
  ),
  "ombudsman.logo": slot("ombudsman", "Logo da Ouvidoria", "/ouvidoria.png"),
  "ombudsman.qr": slot("ombudsman", "QR Code do canal", "/ouvidoria-qr.png"),

  "clients.votorantim": slot(
    "clients",
    "Logo — Votorantim Cimentos",
    "/companhias/Votorantim_Cimentos_Logo.png",
  ),
  "clients.cemig": slot(
    "clients",
    "Logo — CEMIG",
    "/companhias/cemig-logo-0.png",
  ),
  "clients.ceb": slot("clients", "Logo — CEB", "/companhias/logo-ceb.png"),
  "clients.pan-american": slot(
    "clients",
    "Logo — Pan American Energy",
    "/companhias/Pan_American_Energy_logo.svg_.png",
  ),
  "clients.rumo": slot("clients", "Logo — Rumo", "/companhias/rumo.png"),
  "clients.eterc": slot(
    "clients",
    "Logo — ETERC Engenharia",
    "/companhias/eterc.png",
  ),
  "clients.brt-goiania": slot(
    "clients",
    "Logo — BRT Goiânia",
    "/companhias/brt-goiania.png",
  ),
  "clients.cni": slot(
    "clients",
    "Logo — CNI",
    "/companhias/cni-logo-1-scaled.png",
  ),
  "clients.fico": slot(
    "clients",
    "Logo — FICO",
    "/companhias/FICO-e1733330677310.png",
  ),
  "clients.andrade-gutierrez": slot(
    "clients",
    "Logo — Andrade Gutierrez",
    "/companhias/logo-andrade-reta.png",
  ),
  "clients.btec": slot(
    "clients",
    "Logo — BTEC Construções",
    "/companhias/logo-btec-reta.png",
  ),
  "clients.conserva": slot(
    "clients",
    "Logo — Conserva Engenharia",
    "/companhias/logo-conserva-reta.png",
  ),
  "clients.fundacao-renova": slot(
    "clients",
    "Logo — Fundação Renova",
    "/companhias/logo-fundacao-renova-reta.png",
  ),
  "clients.htb": slot("clients", "Logo — HTB", "/companhias/logo-htb-reta.png"),
  "clients.sacyr": slot(
    "clients",
    "Logo — Sacyr",
    "/companhias/logo-sacyr-reta.png",
  ),
  "clients.vereda": slot(
    "clients",
    "Logo — Vereda",
    "/companhias/logo-vereda-reta.png",
  ),
  "clients.anapolis": slot(
    "clients",
    "Logo — Prefeitura de Anápolis",
    "/companhias/logotipo-scaled.png",
  ),

  "projects.parque-eolico-novo-horizonte": slot(
    "projects",
    "Obra — Parque Eólico Novo Horizonte",
    "/parque-eolico.jpg",
  ),
  "projects.reassentamento-bento-rodrigues": slot(
    "projects",
    "Obra — Reassentamento de Bento Rodrigues",
    "/mariana-01.jpg",
  ),
  "projects.rio-piracicaba": slot(
    "projects",
    "Obra — Rio Piracicaba",
    "/drenagem.jpg",
  ),
  "projects.viaduto-perimetral": slot(
    "projects",
    "Obra — Viaduto Perimetral",
    "/viaduto-perimetral.jpg",
  ),
  "projects.pavimentacao-anapolis": slot(
    "projects",
    "Obra — Pavimentação Anápolis",
    "/pavimentacao-anapolis.jpg",
  ),
  "projects.residencia-oficial-cni": slot(
    "projects",
    "Obra — Residência oficial CNI",
    "/cni.jpg",
  ),
  "projects.fabrica-de-cimentos": slot(
    "projects",
    "Obra — Fábrica de cimentos",
    "/fabrica-de-cimentos.jpg",
  ),
  "projects.uhe-queimados": slot(
    "projects",
    "Obra — UHE Queimados",
    "/uhe-queimados-01.jpg",
  ),
  "projects.aeroporto-de-macae": slot(
    "projects",
    "Obra — Aeroporto de Macaé",
    "/concretagem.jpg",
  ),

  "pages.mvv": slot("mvv", "Cabeçalho da página", "/engenheiros-projeto.jpg"),
  "pages.onboarding": slot(
    "collaborator",
    "Cabeçalho — Integração",
    "/equipe-formas.jpg",
  ),
  "pages.safety": slot(
    "collaborator",
    "Cabeçalho — Segurança do trabalho",
    "/equipe-talude.jpg",
  ),
  "pages.documents": slot(
    "collaborator",
    "Cabeçalho — Documentos",
    "/terminal02.jpg",
  ),
  "pages.privacy": slot("privacy", "Cabeçalho da página", "/viaduto02.jpg"),
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof IMAGE_SLOTS;

/** URL final de cada slot (padrão ou enviada pelo backoffice). */
export type SiteImages = Record<ImageKey, string>;

export const DEFAULT_IMAGES = Object.fromEntries(
  Object.entries(IMAGE_SLOTS).map(([key, value]) => [key, value.default]),
) as SiteImages;

export function isImageKey(value: string): value is ImageKey {
  return Object.hasOwn(IMAGE_SLOTS, value);
}

/** Slot da foto de uma obra (mapa e galeria). */
export function projectImageKey(id: ProjectId): ImageKey {
  const key = `projects.${id}`;
  if (!isImageKey(key)) throw new Error(`Obra sem slot de imagem: ${id}`);
  return key;
}
