"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { BRAZIL_MAP_SRC, VIEWBOX_HEIGHT, VIEWBOX_WIDTH } from "./data";
import type { ProjectedLocationMarker } from "./types";

function locationKey(location: ProjectedLocationMarker) {
  return `${location.state}-${location.city}`;
}

function HoveredTooltip({
  location,
}: {
  location: ProjectedLocationMarker | null;
}) {
  const { t } = useI18n();
  if (!location) return null;
  const [x, y] = location.point;

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

// Os estados chegam como um SVG estático (gerado no build) e os marcadores já
// vêm projetados do servidor; aqui fica só a interação.
export function BrazilMap({
  locations,
}: {
  locations: ProjectedLocationMarker[];
}) {
  const { t } = useI18n();
  // `selected` é mantido depois de fechar para o conteúdo continuar visível
  // durante a animação de saída do modal.
  const [selected, setSelected] = useState<ProjectedLocationMarker | null>(
    null,
  );
  const [open, setOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const hoveredLocation =
    locations.find((location) => locationKey(location) === hoveredKey) ?? null;

  function select(location: ProjectedLocationMarker) {
    setSelected(location);
    setOpen(true);
  }

  return (
    <>
      <div
        className="relative h-full"
        style={{ aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}` }}
      >
        <Image
          src={BRAZIL_MAP_SRC}
          alt=""
          fill
          unoptimized
          className="object-contain"
        />

        {/* biome-ignore lint/a11y/noSvgWithoutTitle: camada de marcadores; cada um tem o próprio aria-label, e um <title> viraria tooltip nativo sobre o mapa. */}
        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          {locations.map((location) => {
            const [x, y] = location.point;

            return (
              // biome-ignore lint/a11y/useSemanticElements: marcador dentro de um SVG, onde não há <button>.
              <g
                key={locationKey(location)}
                transform={`translate(${x}, ${y})`}
                onClick={() => select(location)}
                onMouseEnter={() => setHoveredKey(locationKey(location))}
                onMouseLeave={() => setHoveredKey(null)}
                onFocus={() => setHoveredKey(locationKey(location))}
                onBlur={() => setHoveredKey(null)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    select(location);
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
              </g>
            );
          })}

          <HoveredTooltip location={hoveredLocation} />
        </svg>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-slate-900/50 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white outline-none transition-[opacity,scale] duration-200 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
            {selected && (
              <>
                <div className="relative h-48 w-full">
                  <Image
                    src={selected.project.image}
                    alt={t.projects[selected.project.id].title}
                    fill
                    sizes="(min-width: 480px) 448px, 100vw"
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
