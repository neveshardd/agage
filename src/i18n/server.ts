import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale } from "./config";
import { getDictionary } from "./dictionaries";

/** Idioma e textos da rota atual, para uso em Server Components. */
export async function getI18n() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return { locale, t: getDictionary(locale) };
}
