import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Como cada parte do conteúdo aparece no backoffice: página e rótulo da seção, na ordem da lista.
 * As chaves são as de primeiro nível dos dicionários (`src/i18n/dictionaries/pt.ts`); os slots de
 * imagem (`images.ts`) usam as mesmas chaves no campo `section`.
 */
export const CONTENT_SECTIONS: readonly {
  readonly id: keyof Dictionary;
  readonly page: string;
  readonly label: string;
}[] = [
  { id: "common", page: "Geral", label: "Textos comuns" },
  { id: "meta", page: "Geral", label: "SEO e compartilhamento" },
  { id: "navbar", page: "Geral", label: "Navbar e mega menu" },
  { id: "footer", page: "Geral", label: "Rodapé" },
  { id: "hero", page: "Página inicial", label: "Hero" },
  { id: "clients", page: "Página inicial", label: "Nossos clientes" },
  { id: "about", page: "Página inicial", label: "Quem somos" },
  { id: "certifications", page: "Página inicial", label: "Certificações" },
  { id: "coverage", page: "Página inicial", label: "Onde atuamos" },
  { id: "gallery", page: "Página inicial", label: "Principais obras" },
  { id: "projects", page: "Página inicial", label: "Obras (mapa e galeria)" },
  {
    id: "skilledLabor",
    page: "Página inicial",
    label: "Mão de obra especializada",
  },
  {
    id: "servicesSection",
    page: "Página inicial",
    label: "Nossos serviços — título",
  },
  { id: "services", page: "Página inicial", label: "Nossos serviços — cards" },
  { id: "ombudsman", page: "Página inicial", label: "Ouvidoria e Denúncia" },
  {
    id: "mvv",
    page: "Missão, visão e valores",
    label: "Missão, visão e valores",
  },
  {
    id: "collaborator",
    page: "Área do colaborador",
    label: "Integração, segurança e documentos",
  },
  {
    id: "privacy",
    page: "Política de Privacidade",
    label: "Política de Privacidade",
  },
];
