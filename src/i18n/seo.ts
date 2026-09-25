import type { Metadata } from "next";
import { HTML_LANG, LOCALES, type Locale, localizeHref } from "./config";

export const SITE_URL = "https://www.agage.com.br";
export const SITE_NAME = "AGAGE";

/** Canonical e versões em outros idiomas (hreflang) de uma página. */
export function getAlternates(
  locale: Locale,
  path: string,
): Metadata["alternates"] {
  return {
    canonical: localizeHref(locale, path),
    languages: {
      ...Object.fromEntries(
        LOCALES.map((item) => [HTML_LANG[item], localizeHref(item, path)]),
      ),
      "x-default": path,
    },
  };
}
