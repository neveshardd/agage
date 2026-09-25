import { type Locale, localizeHref } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { NavItemData } from "./types";

export function getNavItems(t: Dictionary, locale: Locale): NavItemData[] {
  const href = (path: string) => localizeHref(locale, path);

  return [
    {
      label: t.navbar.agage.label,
      href: href("/#sobre"),
      megaMenu: {
        columns: [
          {
            sections: [
              {
                heading: t.navbar.agage.institutional,
                links: [
                  { label: t.navbar.agage.aboutUs, href: href("/#sobre") },
                  {
                    label: t.navbar.agage.missionVisionValues,
                    href: href("/missao-visao-e-valores"),
                  },
                  {
                    label: t.navbar.agage.certifications,
                    href: href("/#certificacoes"),
                  },
                  {
                    label: t.navbar.agage.skilledLabor,
                    href: href("/#mao-de-obra"),
                  },
                ],
              },
            ],
          },
          {
            sections: [
              {
                heading: t.navbar.agage.operations,
                links: [
                  {
                    label: t.navbar.agage.whereWeWork,
                    href: href("/#onde-atuamos"),
                  },
                  { label: t.navbar.agage.ourProjects, href: href("/#obras") },
                ],
              },
            ],
          },
          {
            sections: [
              {
                heading: t.navbar.agage.transparency,
                links: [
                  {
                    label: t.navbar.agage.ombudsman,
                    href: href("/#ouvidoria"),
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    { label: t.common.services, href: href("/#servicos") },
    { label: t.navbar.projects, href: href("/#obras") },
    { label: t.navbar.contact, href: href("/#contato") },
  ];
}
