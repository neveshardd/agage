import type { HeroSlideData } from "./types";

// Os textos de cada slide ficam em `hero.slides` nos dicionários
// (src/i18n/dictionaries), na mesma ordem desta lista.
export const HERO_SLIDES: HeroSlideData[] = [
  { image: "/intervention.jpg", ctaHref: "/#obras" },
  { image: "/terminal.jpg", ctaHref: "/#obras" },
  { image: "/terminal02.jpg", ctaHref: "/#servicos" },
  { image: "/viaduto.jpg", ctaHref: "/#obras" },
  { image: "/viaduto02.jpg", ctaHref: "/#sobre" },
  { image: "/votorantim.jpeg", ctaHref: "/#mao-de-obra" },
];
