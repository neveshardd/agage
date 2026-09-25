import { BridgeIcon } from "./icons/BridgeIcon";
import { BuildingIcon } from "./icons/BuildingIcon";
import { ConeIcon } from "./icons/ConeIcon";
import { DropletIcon } from "./icons/DropletIcon";
import { FactoryIcon } from "./icons/FactoryIcon";
import { PillarsIcon } from "./icons/PillarsIcon";
import { RoadIcon } from "./icons/RoadIcon";
import { ShovelIcon } from "./icons/ShovelIcon";
import { TerrainIcon } from "./icons/TerrainIcon";
import { WallIcon } from "./icons/WallIcon";
import { WavesIcon } from "./icons/WavesIcon";
import { WrenchIcon } from "./icons/WrenchIcon";
import type { ServiceData } from "./types";

// Os textos de cada serviço ficam nos dicionários (src/i18n/dictionaries),
// indexados pelo slug.
export const SERVICES: ServiceData[] = [
  { slug: "obras-civis", icon: BuildingIcon, accent: "orange" },
  { slug: "pavimentacao", icon: RoadIcon, accent: "blue" },
  { slug: "escavacao", icon: ShovelIcon, accent: "orange" },
  { slug: "impermeabilizacao", icon: DropletIcon, accent: "blue" },
  { slug: "terraplenagem", icon: TerrainIcon, accent: "orange" },
  { slug: "obras-de-infraestrutura", icon: PillarsIcon, accent: "blue" },
  { slug: "obras-de-contencao", icon: WallIcon, accent: "orange" },
  { slug: "conserva-de-estradas", icon: ConeIcon, accent: "blue" },
  { slug: "obras-de-drenagem", icon: WavesIcon, accent: "orange" },
  { slug: "obras-industriais", icon: FactoryIcon, accent: "blue" },
  { slug: "obras-de-artes-especiais", icon: BridgeIcon, accent: "orange" },
  { slug: "tratamento-de-estrutura", icon: WrenchIcon, accent: "blue" },
];
