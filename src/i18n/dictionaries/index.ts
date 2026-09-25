import type { Locale } from "../config";
import { en } from "./en";
import { es } from "./es";
import { type Dictionary, pt } from "./pt";
import { zh } from "./zh";

const DICTIONARIES: Record<Locale, Dictionary> = { pt, en, es, zh };

export function getDictionary(locale: Locale) {
  return DICTIONARIES[locale];
}

export type { Dictionary };
export type ServiceSlug = keyof Dictionary["services"];
export type ProjectId = keyof Dictionary["projects"];
