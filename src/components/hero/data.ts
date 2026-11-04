import type { HeroSlideData } from "./types";

// Vídeo de fundo compartilhado por todos os slides.
export const HERO_VIDEO = "/agage_apresentacao_sem_dominio_sem_legendas.mp4";

// Primeiro quadro do vídeo, exibido enquanto ele carrega. Ao trocar o vídeo,
// gere o pôster de novo:
//   ffmpeg -i public/<video>.mp4 -frames:v 1 -q:v 1 public/hero-poster.jpg
// O pôster é o slot de imagem "hero.poster" (src/content/images.ts).

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
