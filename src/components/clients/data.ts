import type { ImageKey } from "@/content/images";

export interface ClientLogo {
  /** Slot de imagem editável (src/content/images.ts). */
  image: ImageKey;
  alt: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { image: "clients.votorantim", alt: "Votorantim Cimentos" },
  { image: "clients.cemig", alt: "CEMIG" },
  { image: "clients.ceb", alt: "CEB" },
  { image: "clients.pan-american", alt: "Pan American Energy" },
  { image: "clients.rumo", alt: "Rumo" },
  { image: "clients.eterc", alt: "ETERC Engenharia" },
  { image: "clients.brt-goiania", alt: "BRT Goiânia" },
  { image: "clients.cni", alt: "CNI" },
  { image: "clients.fico", alt: "FICO" },
  { image: "clients.andrade-gutierrez", alt: "Andrade Gutierrez" },
  { image: "clients.btec", alt: "BTEC Construções" },
  { image: "clients.conserva", alt: "Conserva Engenharia" },
  { image: "clients.fundacao-renova", alt: "Fundação Renova" },
  { image: "clients.htb", alt: "HTB" },
  { image: "clients.sacyr", alt: "Sacyr" },
  { image: "clients.vereda", alt: "Vereda" },
  { image: "clients.anapolis", alt: "Prefeitura de Anápolis" },
];
