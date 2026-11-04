import type { ImageKey } from "@/content/images";

export interface CertificationBadge {
  /** Slot de imagem editável (src/content/images.ts). */
  image: ImageKey;
}

// Os textos alternativos ficam em `certifications.badges` nos dicionários, na
// mesma ordem desta lista.
export const CERTIFICATION_BADGES: CertificationBadge[] = [
  { image: "certifications.badge.clt" },
  { image: "certifications.badge.esg" },
  { image: "certifications.badge.legal" },
  { image: "certifications.badge.lgpd" },
  { image: "certifications.badge.safety" },
  { image: "certifications.badge.mulher" },
];
