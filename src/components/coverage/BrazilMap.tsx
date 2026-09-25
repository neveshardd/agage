"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import { type ComponentProps, useLayoutEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  useMapContext,
} from "react-simple-maps";
import { useI18n } from "@/i18n/I18nProvider";
import { BRAZIL_STATES_GEO_URL, COVERAGE_LOCATIONS } from "./data";
import type { LocationMarker as LocationMarkerData } from "./types";

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 650;

function locationKey(location: LocationMarkerData) {
  return `${location.state}-${location.city}`;
}

// Arredonda a posição projetada para que o servidor (Node) e o navegador
// gerem exatamente o mesmo `transform`. Sem isso, diferenças na última casa
// decimal do cálculo de ponto flutuante causam erro de hidratação.
function useProjectedPoint(coordinates: [number, number]) {
  const { projection } = useMapContext();
  const point = projection(coordinates);
  if (!point) return null;
  return point.map((value) => Math.round(value * 100) / 100) as [
    number,
    number,
  ];
}

function MapMarker({
  coordinates,
  ...props
}: { coordinates: [number, number] } & ComponentProps<"g">) {
  const point = useProjectedPoint(coordinates);
  if (!point) return null;
  const [x, y] = point;

  return <g transform={`translate(${x}, ${y})`} {...props} />;
}

function HoveredTooltip({ location }: { location: LocationMarkerData | null }) {
  const { t } = useI18n();
  const point = useProjectedPoint(location?.coordinates ?? [0, 0]);
  if (!location || !point) return null;
  const [x, y] = point;

  return (
    <g transform={`translate(${x}, ${y})`} className="pointer-events-none">
      <foreignObject x={-85} y={-85} width={170} height={64}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-0.5 border-[3px] border-slate-400 bg-white px-2 py-1.5 text-center shadow-md">
          <span className="text-[13px] leading-tight font-bold text-brand-navy">
            {location.city}
          </span>
          <span className="line-clamp-2 text-[11px] leading-tight text-slate-600">
            {t.projects[location.project.id].title}
          </span>
        </div>
      </foreignObject>
    </g>
  );
}

export function BrazilMap() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [selected, setSelected] = useState<LocationMarkerData | null>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setHeight(container.getBoundingClientRect().height);

    const observer = new ResizeObserver(([entry]) => {
      if (entry) setHeight(entry.contentRect.height);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const width = height * (VIEWBOX_WIDTH / VIEWBOX_HEIGHT);
  const hoveredLocation =
    COVERAGE_LOCATIONS.find(
      (location) => locationKey(location) === hoveredKey,
    ) ?? null;

  return (
    <>
      <div ref={containerRef} className="h-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [-66, -14], scale: 700 }}
          width={VIEWBOX_WIDTH}
          height={VIEWBOX_HEIGHT}
          preserveAspectRatio="xMaxYMid meet"
          className="overflow-visible"
          style={height > 0 ? { width, height, display: "block" } : undefined}
        >
          <Geographies geography={BRAZIL_STATES_GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="fill-brand-orange stroke-white stroke-[0.75px] outline-none"
                />
              ))
            }
          </Geographies>

          {COVERAGE_LOCATIONS.map((location) => (
            <MapMarker
              key={locationKey(location)}
              coordinates={location.coordinates}
              onClick={() => setSelected(location)}
              onMouseEnter={() => setHoveredKey(locationKey(location))}
              onMouseLeave={() => setHoveredKey(null)}
              onFocus={() => setHoveredKey(locationKey(location))}
              onBlur={() => setHoveredKey(null)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelected(location);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${t.coverage.viewDetails}: ${t.projects[location.project.id].title}`}
              className="cursor-pointer outline-none"
            >
              <circle
                r={13}
                className="fill-white stroke-brand-blue stroke-[3px] transition-transform duration-150 hover:scale-110"
              />
              <circle r={5.5} className="fill-brand-blue" />
            </MapMarker>
          ))}

          <HoveredTooltip location={hoveredLocation} />
        </ComposableMap>
      </div>

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-slate-900/50" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white outline-none">
            {selected && (
              <>
                <div className="relative h-48 w-full">
                  <Image
                    src={selected.project.image}
                    alt={t.projects[selected.project.id].title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <Dialog.Title className="text-xl font-bold text-brand-navy">
                    {t.projects[selected.project.id].title}
                  </Dialog.Title>

                  <p className="mt-1 text-sm text-slate-500">
                    {selected.city} — {selected.state}
                  </p>

                  <Dialog.Description className="mt-4 text-sm leading-relaxed text-slate-600">
                    {t.projects[selected.project.id].description}
                  </Dialog.Description>

                  <Dialog.Close className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-sm bg-brand-navy px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-navy/90">
                    {t.common.close}
                  </Dialog.Close>
                </div>
              </>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
