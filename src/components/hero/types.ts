import type { Dictionary } from "@/i18n/dictionaries";

export interface HeroSlideData {
  ctaHref: string;
}

export type HeroSlideText = Dictionary["hero"]["slides"][number];
