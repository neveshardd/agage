"use client";

import { createContext, type ReactNode, use } from "react";
import type { SiteImages } from "@/content/images";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries";

interface I18nValue {
  locale: Locale;
  t: Dictionary;
  images: SiteImages;
}

const I18nContext = createContext<I18nValue | null>(null);

// Recebe textos e imagens já resolvidos no servidor (com as alterações do backoffice), para que
// só o idioma atual seja enviado ao navegador.
export function I18nProvider({
  locale,
  t,
  images,
  children,
}: I18nValue & { children: ReactNode }) {
  return <I18nContext value={{ locale, t, images }}>{children}</I18nContext>;
}

/** Idioma, textos e imagens da rota atual, para uso em Client Components. */
export function useI18n() {
  const context = use(I18nContext);
  if (!context) throw new Error("useI18n precisa estar dentro de I18nProvider");
  return context;
}
