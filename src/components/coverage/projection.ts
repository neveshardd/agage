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

/**
 * Afasta pontos que ficariam sobrepostos (cidades muito próximas, como as obras do Distrito
 * Federal ou Goiânia e Anápolis), mantendo cada um perto da posição real. Relaxação simples: a
 * cada passo, pares mais próximos que `minDistance` são empurrados em sentidos opostos.
 * Determinística (mesma entrada, mesma saída), roda uma vez no servidor.
 */
export function separatePoints(
  points: readonly [number, number][],
  minDistance: number,
  iterations = 80,
): [number, number][] {
  const result = points.map(([x, y]) => [x, y] as [number, number]);
  for (let step = 0; step < iterations; step++) {
    let moved = false;
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        const a = result[i];
        const b = result[j];
        let dx = b[0] - a[0];
        let dy = b[1] - a[1];
        let distance = Math.hypot(dx, dy);
        if (distance >= minDistance) continue;
        if (distance < 0.01) {
          // Pontos idênticos: separa numa direção fixa, diferente para cada par.
          const angle = (i * 7 + j * 13) % 360;
          dx = Math.cos((angle * Math.PI) / 180);
          dy = Math.sin((angle * Math.PI) / 180);
          distance = 1;
        }
        const push = (minDistance - distance) / 2;
        const ux = dx / distance;
        const uy = dy / distance;
        a[0] -= ux * push;
        a[1] -= uy * push;
        b[0] += ux * push;
        b[1] += uy * push;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return result.map(([x, y]) => [
    Math.round(x * 100) / 100,
    Math.round(y * 100) / 100,
  ]);
}
