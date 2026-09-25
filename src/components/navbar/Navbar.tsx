"use client";

import { useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { getNavItems } from "./data";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./mobile/MobileMenu";
import { PrimaryNav } from "./PrimaryNav";

export function Navbar() {
  const { locale, t } = useI18n();
  const anchorRef = useRef<HTMLDivElement>(null);
  const items = getNavItems(t, locale);

  return (
    <header className="relative z-40 h-20 w-full border-b border-slate-200 bg-white">
      <div
        ref={anchorRef}
        className="mx-auto flex h-full max-w-7xl items-center gap-8 px-6 lg:px-10"
      >
        <Logo />
        <PrimaryNav items={items} anchorRef={anchorRef} />
        <div className="ml-auto hidden lg:block">
          <LanguageSwitcher />
        </div>
        <MobileMenu items={items} className="ml-auto lg:hidden" />
      </div>
    </header>
  );
}
