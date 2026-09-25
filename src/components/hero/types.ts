import type { Dictionary } from "@/i18n/dictionaries";

export interface HeroSlideData {
  image: string;
  ctaHref: string;
}

export type HeroSlideText = Dictionary["hero"]["slides"][number];
