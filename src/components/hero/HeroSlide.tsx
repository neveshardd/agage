import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { HeroSlideText } from "./types";

export function HeroSlide({
  text,
  href,
}: {
  text: HeroSlideText;
  href: string;
}) {
  return (
    <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center gap-4 px-16 pb-16 text-center sm:gap-5 sm:px-24 sm:pb-20">
      <h2 className="text-2xl max-w-xl leading-tight font-bold text-balance text-white sm:text-4xl lg:text-5xl">
        {text.heading}
      </h2>
      <p className="text-xs max-w-xl text-white/90 sm:text-base lg:text-lg">
        {text.before}
        <strong className="font-semibold">AGAGE</strong>
        {text.after}
      </p>
      <Link
        href={href}
        className="group absolute bottom-12 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-5 py-2.5 shadow-lg shadow-slate-900/30 sm:bottom-14 text-xs font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-orange-dark sm:px-6 sm:py-3 sm:text-sm"
      >
        {text.cta}
        <IconArrowRight
          aria-hidden
          stroke={2.25}
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 sm:h-5 sm:w-5"
        />
      </Link>
    </div>
  );
}
