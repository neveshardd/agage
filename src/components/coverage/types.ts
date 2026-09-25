import type { ProjectId } from "@/i18n/dictionaries";

export interface LocationProject {
  id: ProjectId;
  client: string;
  image: string;
  /** Quando `false`, a obra aparece só no mapa, fora da galeria "Nossas obras". */
  inGallery?: boolean;
}

export interface LocationMarker {
  state: string;
  city: string;
  /** [longitude, latitude] */
  coordinates: [number, number];
  project: LocationProject;
}
