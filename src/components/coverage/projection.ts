import { geoMercator } from "d3-geo";
import { VIEWBOX_HEIGHT, VIEWBOX_WIDTH } from "./data";

// Projeção compartilhada entre o SVG dos estados e os marcadores, para que os
// pinos caiam exatamente sobre o mapa. Importe este arquivo apenas no
// servidor: o navegador recebe os pontos já projetados e não precisa do d3.
export const projection = geoMercator()
  .translate([VIEWBOX_WIDTH / 2, VIEWBOX_HEIGHT / 2])
  .center([-66, -14])
  .scale(700);

/** Converte [longitude, latitude] em [x, y] dentro do viewBox do mapa. */
export function projectPoint(coordinates: [number, number]): [number, number] {
  const point = projection(coordinates);
  if (!point) throw new Error(`Coordenada fora da projeção: ${coordinates}`);
  return [Math.round(point[0] * 100) / 100, Math.round(point[1] * 100) / 100];
}
