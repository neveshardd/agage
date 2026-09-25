import type { LocationMarker } from "./types";

export const BRAZIL_STATES_GEO_URL = "/data/brazil-states.json";

/**
 * Edite esta lista para escolher onde os marcadores aparecem no mapa e o que
 * é exibido no modal ao clicar em cada um.
 * `coordinates` é [longitude, latitude] do local (não do centro do estado),
 * para o pino cair exatamente na cidade desejada.
 */
export const COVERAGE_LOCATIONS: LocationMarker[] = [
  {
    state: "BA",
    city: "Novo Horizonte",
    coordinates: [-42.1686, -12.8083],
    project: {
      id: "parque-eolico-novo-horizonte",
      client: "Pan American Energy / Andrade Gutierrez",
      image: "/parque-eolico.jpg",
    },
  },
  {
    state: "MG",
    city: "Mariana",
    coordinates: [-43.4161, -20.3778],
    project: {
      id: "reassentamento-bento-rodrigues",
      client: "Fundação Renova / HTB",
      image: "/mariana-01.jpg",
    },
  },
  {
    state: "MG",
    city: "Rio Piracicaba",
    coordinates: [-43.1742, -19.9286],
    project: {
      id: "rio-piracicaba",
      client: "BTEC Construções",
      image: "/drenagem.jpg",
    },
  },
  {
    state: "GO",
    city: "Goiânia",
    coordinates: [-49.2648, -16.6869],
    project: {
      id: "viaduto-perimetral",
      client: "Consórcio BRT Goiânia",
      image: "/viaduto-perimetral.jpg",
    },
  },
  {
    state: "GO",
    city: "Anápolis",
    coordinates: [-48.953, -16.3281],
    project: {
      id: "pavimentacao-anapolis",
      client: "Prefeitura de Anápolis",
      image: "/equipe-talude.jpg",
    },
  },
  {
    state: "DF",
    city: "Brasília",
    coordinates: [-47.87, -15.84],
    project: {
      id: "residencia-oficial-cni",
      client: "Confederação Nacional da Indústria",
      image: "/cni.jpg",
    },
  },
  {
    state: "DF",
    city: "Sobradinho",
    coordinates: [-47.787, -15.653],
    project: {
      id: "fabrica-de-cimentos",
      client: "Votorantim",
      image: "/votorantim.jpeg",
    },
  },
  {
    state: "MG",
    city: "Unaí",
    coordinates: [-47.32, -16.21],
    project: {
      id: "uhe-queimados",
      client: "Consórcio CEMIG e CEB",
      image: "/uhe-queimados-01.jpg",
    },
  },
  {
    state: "RJ",
    city: "Macaé",
    coordinates: [-41.7869, -22.3768],
    project: {
      id: "aeroporto-de-macae",
      inGallery: false,
      client: "Conserva",
      image: "/concretagem.jpg",
    },
  },
];
