import type { SiteImages } from "@/content/images";
import { type Locale, localizeHref } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { NavItemData } from "./types";

/**
 * Navegação principal: só links para páginas (sem âncoras da página inicial). Missão, visão e
 * valores e Integração ficam como links diretos; as demais páginas, no único item com submenu.
 * As fotos do mega menu são slots editáveis no backoffice.
 */
export function getNavItems(
  t: Dictionary,
  locale: Locale,
  images: SiteImages,
): NavItemData[] {
  const href = (path: string) => localizeHref(locale, path);

  return [
    {
      label: t.navbar.agage.missionVisionValues,
      href: href("/missao-visao-e-valores"),
    },
    {
      label: t.collaborator.links.onboarding,
      href: href("/integracao"),
    },
    {
      label: t.navbar.agage.label,
      href: href("/politica-de-privacidade"),
      megaMenu: {
        columns: [
          {
            sections: [
              {
                heading: t.navbar.agage.institutional,
                links: [
                  {
                    label: t.privacy.title,
                    href: href("/politica-de-privacidade"),
                    image: images["navbar.privacy"],
                  },
                ],
              },
            ],
          },
          {
            sections: [
              {
                heading: t.collaborator.menuHeading,
                links: [
                  {
                    label: t.collaborator.links.safety,
                    href: href("/seguranca-do-trabalho"),
                    image: images["navbar.safety"],
                  },
                  {
                    label: t.collaborator.links.documents,
                    href: href("/documentos"),
                    image: images["navbar.documents"],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];
}
