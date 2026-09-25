export interface CertificationBadge {
  src: string;
}

// Os textos alternativos ficam em `certifications.badges` nos dicionários, na
// mesma ordem desta lista.
export const CERTIFICATION_BADGES: CertificationBadge[] = [
  { src: "/certificados/clt.png" },
  { src: "/certificados/esg.png" },
  { src: "/certificados/legal.png" },
  { src: "/certificados/lgpd.png" },
  { src: "/certificados/safety.png" },
  { src: "/certificados/mulher.png" },
];
