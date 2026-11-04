"use client";

import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** Linha superior da navbar (desktop): idioma e atalhos institucionais. */
export function UtilityNav() {
  const { locale, t } = useI18n();
  const links = [
    {
      label: t.collaborator.menuHeading,
      href: localizeHref(locale, "/integracao"),
    },
    {
      label: t.navbar.agage.ombudsman,
      href: localizeHref(locale, "/#ouvidoria"),
    },
  ];

  return (
    <nav
      aria-label={t.navbar.utilityNav}
      className="flex items-center justify-end gap-6"
    >
      <LanguageSwitcher />
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] text-slate-700 transition-colors duration-150 hover:text-brand-navy hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
