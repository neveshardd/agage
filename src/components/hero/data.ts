import type { HeroSlideData } from "./types";

// Vídeo de fundo compartilhado por todos os slides.
export const HERO_VIDEO = "/agage_apresentacao_sem_dominio_sem_legendas.mp4";

// Os textos de cada slide ficam em `hero.slides` nos dicionários
// (src/i18n/dictionaries), na mesma ordem desta lista.
export const HERO_SLIDES: HeroSlideData[] = [
  { ctaHref: "/#obras" },
  { ctaHref: "/#obras" },
  { ctaHref: "/#servicos" },
  { ctaHref: "/#obras" },
  { ctaHref: "/#sobre" },
  { ctaHref: "/#mao-de-obra" },
];
