import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { cache } from "react";
import {
  applyTextOverrides,
  fetchSiteContent,
  resolveImages,
} from "@/content/overrides";
import { hasLocale } from "./config";
import { getDictionary } from "./dictionaries";

/**
 * Idioma, textos e imagens da rota atual, para uso em Server Components. Os textos e imagens
 * editados no backoffice são aplicados sobre o dicionário padrão; se a API falhar, vale o padrão.
 */
export const getI18n = cache(async () => {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  const overrides = await fetchSiteContent(locale);
  return {
    locale,
    t: applyTextOverrides(getDictionary(locale), overrides?.texts),
    images: resolveImages(overrides?.images),
  };
});
