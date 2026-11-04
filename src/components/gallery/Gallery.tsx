"use client";

import "swiper/css";
import "swiper/css/navigation";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { COVERAGE_LOCATIONS } from "@/components/coverage/data";
import { useI18n } from "@/i18n/I18nProvider";
import { ProjectCard } from "./ProjectCard";

const GALLERY_LOCATIONS = COVERAGE_LOCATIONS.filter(
  (location) => location.project.inGallery !== false,
);

export function Gallery() {
  const { t } = useI18n();
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section
      id="obras"
      className="mx-auto w-full max-w-screen-2xl px-6 py-16 sm:py-20 lg:px-10"
    >
      <div data-reveal className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-balance text-brand-navy sm:text-3xl lg:text-4xl">
          {t.gallery.title}
        </h2>

        <div className="flex shrink-0 gap-2">
          <button
            ref={setPrevEl}
            type="button"
            aria-label={t.gallery.previous}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-brand-navy transition-colors duration-150 hover:bg-slate-50 [&.swiper-button-disabled]:cursor-default [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:hover:bg-transparent"
          >
            <IconChevronLeft aria-hidden className="h-5 w-5" />
          </button>
          <button
            ref={setNextEl}
            type="button"
            aria-label={t.gallery.next}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-brand-navy transition-colors duration-150 hover:bg-slate-50 [&.swiper-button-disabled]:cursor-default [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:hover:bg-transparent"
          >
            <IconChevronRight aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl, nextEl }}
        spaceBetween={24}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 4 },
        }}
        className="gallery-swiper mt-10 sm:mt-12"
      >
        {GALLERY_LOCATIONS.map((location) => (
          <SwiperSlide
            key={`${location.state}-${location.city}`}
            className="h-auto!"
          >
            <ProjectCard location={location} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
