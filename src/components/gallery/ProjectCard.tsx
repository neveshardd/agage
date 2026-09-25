"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import type { LocationMarker } from "@/components/coverage/types";
import { useI18n } from "@/i18n/I18nProvider";
import { CloseIcon } from "./icons/CloseIcon";
import { PinIcon } from "./icons/PinIcon";

export function ProjectCard({ location }: { location: LocationMarker }) {
  const { t } = useI18n();
  const title = t.projects[location.project.id].title;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <Dialog.Root>
        <Dialog.Trigger
          aria-label={`${t.gallery.viewLarger}: ${title}`}
          className="relative block h-56 w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0"
        >
          <Image
            src={location.project.image}
            alt={title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-slate-900/70" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 outline-none">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
              <Image
                src={location.project.image}
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
              <CloseIcon className="h-4 w-4" />
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="p-5">
        <h3 className="font-bold text-brand-navy">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-brand-blue">
          {location.project.client}
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
          <PinIcon className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
          {location.city} — {location.state}
        </p>
      </div>
    </div>
  );
}
