import type { MetadataRoute } from "next";
import { HTML_LANG, LOCALES, localizeHref } from "@/i18n/config";
import { SITE_URL } from "@/i18n/seo";

const PATHS = ["/", "/missao-visao-e-valores"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${localizeHref(locale, path)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((item) => [
            HTML_LANG[item],
            `${SITE_URL}${localizeHref(item, path)}`,
          ]),
        ),
      },
    })),
  );
}
