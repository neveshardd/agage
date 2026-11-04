import { IMAGE_SLOTS } from "@/content/images";
import { CONTENT_SECTIONS } from "@/content/sections";
import { LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Estrutura do conteúdo editável, lida pelo backoffice para montar a tela "Textos e imagens":
 * seções, campos de texto (com o padrão de cada idioma) e slots de imagem (com o arquivo padrão).
 * Sempre reflete o código publicado: um campo novo no dicionário aparece no backoffice sozinho.
 */

// Rótulos amigáveis para os trechos mais comuns das chaves dos dicionários.
const SEGMENT_LABELS: Record<string, string> = {
  title: "Título",
  heading: "Título",
  text: "Texto",
  description: "Descrição",
  metaDescription: "Descrição (SEO)",
  cta: "Botão",
  button: "Botão",
  before: "Texto antes de “AGAGE”",
  after: "Texto depois de “AGAGE”",
  alt: "Texto alternativo da imagem",
  imageAlt: "Texto alternativo da imagem",
  logoAlt: "Texto alternativo do logo",
  qrAlt: "Texto alternativo do QR Code",
  intro: "Introdução",
  closing: "Fechamento",
  label: "Rótulo",
  paragraphs: "Parágrafo",
  items: "Item",
  slides: "Slide",
  sections: "Bloco",
  values: "Valor",
  pillars: "Pilar",
  programs: "Programa",
  badges: "Selo",
  previous: "Botão anterior (acessibilidade)",
  next: "Botão próximo (acessibilidade)",
  mute: "Desativar som (acessibilidade)",
  unmute: "Ativar som (acessibilidade)",
  volume: "Volume (acessibilidade)",
  close: "Fechar (acessibilidade)",
  name: "Nome",
  acronym: "Sigla",
  norm: "Norma",
  onboarding: "Integração",
  safety: "Segurança do trabalho",
  documents: "Documentos",
  institutional: "Institucional",
  agage: "A AGAGE",
  links: "Links do menu",
  video: "Vídeo",
  missionVisionValues: "Missão, visão e valores",
  ombudsman: "Ouvidoria e Denúncia",
  unavailable: "Aviso de indisponível",
  unsupported: "Aviso de navegador sem suporte",
  home: "Início",
  services: "Serviços",
  back: "Voltar",
  breadcrumb: "Trilha de navegação (acessibilidade)",
  logoLabel: "Logo (acessibilidade)",
  utilityNav: "Atalhos (acessibilidade)",
  openMenu: "Abrir menu (acessibilidade)",
  closeMenu: "Fechar menu (acessibilidade)",
  mainNav: "Navegação principal (acessibilidade)",
  language: "Idioma",
  openLanguages: "Abrir idiomas (acessibilidade)",
  quickAccess: "Título — Acesso rápido",
  contact: "Contato",
  aboutUs: "Quem somos",
  whereWeWork: "Onde atuamos",
  certifications: "Certificações",
  rights: "Direitos reservados",
  privacy: "Política de Privacidade",
  developedBy: "Desenvolvido por",
  backToTop: "Voltar ao topo (acessibilidade)",
  viewDetails: "Ver detalhes",
  viewLarger: "Ampliar foto (acessibilidade)",
  client: "Rótulo — Cliente",
  service: "Rótulo — Serviço",
  titleLine1: "Título — linha 1",
  titleLine2: "Título — linha 2",
  qrLabel: "QR Code (acessibilidade)",
  cardText: "Texto do card",
  mission: "Título — Missão",
  missionText: "Missão",
  vision: "Título — Visão",
  visionText: "Visão",
  valuesTitle: "Título — Valores",
  menu: "Menu",
  menuHeading: "Título do menu",
  empty: "Aviso de lista vazia",
  emptyHint: "Complemento do aviso de lista vazia",
  open: "Botão Abrir",
  download: "Botão Baixar",
  revision: "Rótulo — Revisão",
  updated: "Rótulo — Atualizado em",
  programsTitle: "Título — Programas",
  updatedLabel: "Rótulo — Última atualização",
  updatedDate: "Data da última atualização",
  contactTitle: "Contato — título",
  contactText: "Contato — texto",
  contactEmail: "Contato — e-mail",
};

/** "obras-de-drenagem" → "Obras de drenagem" (slugs de serviços e obras). */
function humanize(segment: string) {
  const text = segment.replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function labelFor(segments: string[]) {
  const parts: string[] = [];
  for (const segment of segments) {
    if (/^\d+$/.test(segment)) {
      const last = parts.pop() ?? "";
      parts.push(`${last} ${Number(segment) + 1}`.trim());
    } else {
      parts.push(SEGMENT_LABELS[segment] ?? humanize(segment));
    }
  }
  return parts.join(" › ");
}

/** Achata um trecho do dicionário em caminho → texto ("slides.0.heading" → "…"). */
function flatten(value: unknown, prefix: string, out: Record<string, string>) {
  if (typeof value === "string") {
    out[prefix] = value;
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => {
      flatten(item, `${prefix}.${index}`, out);
    });
  } else if (typeof value === "object" && value !== null) {
    for (const [key, item] of Object.entries(value)) {
      flatten(item, `${prefix}.${key}`, out);
    }
  }
}

export function GET(request: Request) {
  const defaults = Object.fromEntries(
    LOCALES.map((locale) => {
      const out: Record<string, string> = {};
      const dictionary = getDictionary(locale);
      for (const section of CONTENT_SECTIONS) {
        flatten(dictionary[section.id], section.id, out);
      }
      return [locale, out];
    }),
  );

  const reference = defaults.pt ?? {};
  const sections = CONTENT_SECTIONS.map((section) => ({
    id: section.id,
    page: section.page,
    label: section.label,
    fields: Object.keys(reference)
      .filter((key) => key.startsWith(`${section.id}.`))
      .map((key) => ({
        key,
        label: labelFor(key.split(".").slice(1)),
        multiline: (reference[key]?.length ?? 0) > 90,
      })),
    images: Object.entries(IMAGE_SLOTS)
      .filter(([, slot]) => slot.section === section.id)
      .map(([key, slot]) => ({
        key,
        label: slot.label,
        default: slot.default,
      })),
  }));

  return Response.json(
    {
      version: 1,
      siteUrl: new URL(request.url).origin,
      locales: LOCALES,
      sections,
      defaults,
    },
    { headers: { "Cache-Control": "public, max-age=60" } },
  );
}
