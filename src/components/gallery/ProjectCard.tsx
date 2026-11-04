"use client";

import { Dialog } from "@base-ui/react/dialog";
import { IconMapPin, IconX } from "@tabler/icons-react";
import Image from "next/image";
import type { LocationMarker } from "@/components/coverage/types";
import { projectImageKey } from "@/content/images";
import { useI18n } from "@/i18n/I18nProvider";

export function ProjectCard({ location }: { location: LocationMarker }) {
  const { t, images } = useI18n();
  const { title, description } = t.projects[location.project.id];
  const image = images[projectImageKey(location.project.id)];

  return (
    <article className="relative isolate flex aspect-3/4 flex-col justify-between overflow-hidden rounded-2xl border-[6px] border-brand-orange bg-brand-navy text-white">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1280px) 340px, (min-width: 1024px) 25vw, (min-width: 640px) 45vw, 87vw"
        className="-z-10 object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-brand-navy via-brand-navy/55 to-brand-navy/0"
      />

      <span className="m-4 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy">
        <IconMapPin
          aria-hidden
          className="h-3.5 w-3.5 shrink-0 text-brand-orange"
        />
        {location.city}, {location.state}
      </span>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold tracking-wider text-brand-orange uppercase">
          <span className="sr-only">{t.gallery.client}: </span>
          {location.project.client}
        </p>
        <h3 className="mt-1.5 text-xl leading-tight font-bold text-balance">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80">
          <span className="sr-only">{t.gallery.service}: </span>
          {description}
        </p>
      </div>

      <Dialog.Root>
        <Dialog.Trigger
          aria-label={`${t.gallery.viewLarger}: ${title}`}
          className="absolute inset-0 z-10 cursor-pointer rounded-2xl border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        />

        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-slate-900/70 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 outline-none transition-[opacity,scale] duration-200 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                unoptimized
                sizes="90vw"
                className="object-cover"
              />
            </div>

            <Dialog.Close
              aria-label={t.common.close}
              className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-colors duration-150 hover:bg-slate-100"
            >
              <IconX aria-hidden className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </article>
  );
}
