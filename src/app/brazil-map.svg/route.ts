import { readFile } from "node:fs/promises";
import path from "node:path";
import { type GeoContext, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { VIEWBOX_HEIGHT, VIEWBOX_WIDTH } from "@/components/coverage/data";
import { projection } from "@/components/coverage/projection";

// Gerado uma única vez no build: o navegador recebe um SVG pronto, em vez de
// baixar o TopoJSON e projetar os estados com d3 em tempo de execução.
export const dynamic = "force-static";

const STATES_FILE = path.join(
  process.cwd(),
  "src/components/coverage/brazil-states.json",
);

// Mesmos valores de `--brand-orange` e do contorno usados no restante do site.
const FILL = "#f2a122";
const STROKE = "#ffffff";
const STROKE_WIDTH = 0.75;

// As coordenadas são escritas como inteiros em décimos de unidade do viewBox
// (desfeito pelo `scale(.1)` do grupo) e em comandos relativos. Pontos que
// caem no mesmo décimo são descartados: é a maior parte do arquivo original e
// não muda nada do que é desenhado.
const PRECISION = 10;

class PathWriter implements GeoContext {
  d = "";
  private x = 0;
  private y = 0;

  moveTo(x: number, y: number) {
    this.x = Math.round(x * PRECISION);
    this.y = Math.round(y * PRECISION);
    this.d += `M${this.x},${this.y}`;
  }

  lineTo(x: number, y: number) {
    const nextX = Math.round(x * PRECISION);
    const nextY = Math.round(y * PRECISION);
    if (nextX === this.x && nextY === this.y) return;
    this.d += `l${nextX - this.x},${nextY - this.y}`;
    this.x = nextX;
    this.y = nextY;
  }

  closePath() {
    this.d += "z";
  }

  // Usados pelo d3 só para geometrias de ponto, que este mapa não tem.
  beginPath() {}
  arc() {}
}

export async function GET() {
  const topology = JSON.parse(await readFile(STATES_FILE, "utf8")) as Topology;
  const states = feature(topology, Object.values(topology.objects)[0]);
  const features = states.type === "FeatureCollection" ? states.features : [];

  const paths = features
    .map((state) => {
      const writer = new PathWriter();
      geoPath(projection, writer)(state);
      return `<path d="${writer.d}"/>`;
    })
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}"><g transform="scale(${1 / PRECISION})" fill="${FILL}" stroke="${STROKE}" stroke-width="${STROKE_WIDTH * PRECISION}">${paths}</g></svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
    },
  });
}
