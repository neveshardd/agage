"use client";

import { createContext, type ReactNode, use } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries";

const I18nContext = createContext<{ locale: Locale; t: Dictionary } | null>(
  null,
);

// Recebe o dicionário já resolvido no servidor, para que só o idioma atual
// seja enviado ao navegador.
export function I18nProvider({
  locale,
  t,
  children,
}: {
  locale: Locale;
  t: Dictionary;
  children: ReactNode;
}) {
  return <I18nContext value={{ locale, t }}>{children}</I18nContext>;
}

/** Idioma e textos da rota atual, para uso em Client Components. */
export function useI18n() {
  const context = use(I18nContext);
  if (!context) throw new Error("useI18n precisa estar dentro de I18nProvider");
  return context;
}
