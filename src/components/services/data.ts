import {
  IconBuilding,
  IconBuildingBank,
  IconBuildingBridge2,
  IconBuildingFactory2,
  IconDroplet,
  IconHelmet,
  IconMountain,
  IconRipple,
  IconRoad,
  IconShovel,
  IconTool,
  IconWall,
} from "@tabler/icons-react";
import type { ServiceData } from "./types";

// Os textos de cada serviço ficam nos dicionários (src/i18n/dictionaries),
// indexados pelo slug.
export const SERVICES: ServiceData[] = [
  { slug: "obras-civis", icon: IconBuilding, accent: "orange" },
  { slug: "pavimentacao", icon: IconRoad, accent: "blue" },
  { slug: "escavacao", icon: IconShovel, accent: "orange" },
  { slug: "impermeabilizacao", icon: IconDroplet, accent: "blue" },
  { slug: "terraplenagem", icon: IconMountain, accent: "orange" },
  { slug: "obras-de-infraestrutura", icon: IconBuildingBank, accent: "blue" },
  { slug: "obras-de-contencao", icon: IconWall, accent: "orange" },
  { slug: "fornecimento-de-mao-de-obra", icon: IconHelmet, accent: "blue" },
  { slug: "obras-de-drenagem", icon: IconRipple, accent: "orange" },
  { slug: "obras-industriais", icon: IconBuildingFactory2, accent: "blue" },
  {
    slug: "obras-de-artes-especiais",
    icon: IconBuildingBridge2,
    accent: "orange",
  },
  { slug: "tratamento-de-estrutura", icon: IconTool, accent: "blue" },
];
