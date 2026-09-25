export const LOCALES = ["pt", "en", "es", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

// O idioma padrão é servido sem prefixo na URL (ex.: "/"), os demais com
// prefixo (ex.: "/en", "/es").
export const DEFAULT_LOCALE: Locale = "pt";

export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  zh: "zh-CN",
};

export const LANGUAGE_OPTIONS: {
  locale: Locale;
  code: string;
  label: string;
}[] = [
  { locale: "pt", code: "PT-BR", label: "Português (Brasil)" },
  { locale: "en", code: "EN", label: "English" },
  { locale: "es", code: "ES", label: "Español" },
  { locale: "zh", code: "ZH", label: "中文（简体）" },
];

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Adiciona o prefixo do idioma a um link interno ("/", "/#sobre", "/servicos/x"). */
export function localizeHref(locale: Locale, href: string) {
  if (locale === DEFAULT_LOCALE || !href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`;
  return `/${locale}${href}`;
}

/** Remove o prefixo de idioma de um pathname, devolvendo o caminho base. */
export function stripLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  if (!hasLocale(first)) return pathname;
  return `/${rest.join("/")}`;
}
