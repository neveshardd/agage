import Link from "next/link";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import type { HeroSlideText } from "./types";

export function HeroSlide({
  text,
  href,
}: {
  text: HeroSlideText;
  href: string;
}) {
  return (
    <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center sm:gap-5">
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
        className="mt-1 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-5 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-orange-dark sm:px-6 sm:py-3 sm:text-sm"
      >
        {text.cta}
        <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </Link>
    </div>
  );
}
