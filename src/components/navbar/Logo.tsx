"use client";

import Image from "next/image";
import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

export function Logo() {
  const { locale, t, images } = useI18n();

  return (
    <Link
      href={localizeHref(locale, "/")}
      className="flex shrink-0 items-center"
      aria-label={t.navbar.logoLabel}
    >
      <Image
        src={images["brand.logo"]}
        alt="AGAGE"
        width={160}
        height={37}
        loading="eager"
        className="h-8 w-auto lg:h-11"
      />
    </Link>
  );
}
