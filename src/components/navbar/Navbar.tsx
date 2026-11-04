"use client";

import { useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { getNavItems } from "./data";
import { Logo } from "./Logo";
import { MobileMenu } from "./mobile/MobileMenu";
import { PrimaryNav } from "./PrimaryNav";
import { UtilityNav } from "./UtilityNav";

/**
 * Navbar fixa no topo. No desktop: logo à esquerda e duas linhas à direita (atalhos em cima,
 * navegação principal embaixo). No mobile: logo e menu.
 */
export function Navbar() {
  const { locale, t, images } = useI18n();
  const anchorRef = useRef<HTMLDivElement>(null);
  const items = getNavItems(t, locale, images);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
      <div
        ref={anchorRef}
        className="mx-auto flex h-20 max-w-screen-2xl items-center gap-8 px-6 lg:h-auto lg:px-10 lg:py-3"
      >
        <Logo />
        <div className="ml-auto hidden flex-col items-end gap-2 lg:flex">
          <UtilityNav />
          <PrimaryNav items={items} anchorRef={anchorRef} />
        </div>
        <MobileMenu items={items} className="ml-auto lg:hidden" />
      </div>
    </header>
  );
}
