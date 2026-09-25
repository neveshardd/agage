import Image from "next/image";
import Link from "next/link";
import { getI18n } from "@/i18n/server";

export async function CTA() {
  const { t } = await getI18n();

  return (
    <section
      id="contato"
      className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80"
    >
      <Image
        src="/equipe-alvenaria.jpg"
        alt={t.cta.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-l from-brand-orange/75 via-brand-orange/85 to-brand-orange-dark/95 sm:from-brand-orange/15 sm:via-brand-orange/75 sm:to-brand-orange-dark/95" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-xl text-white sm:mr-auto">
          <h2 className="text-xl font-bold text-balance sm:text-2xl lg:text-3xl">
            {t.cta.title}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-white/90 sm:text-sm">
            {t.cta.text}
          </p>

          <Link
            href="mailto:engenharia@agage.com.br"
            className="mt-5 inline-flex items-center justify-center rounded-sm bg-brand-navy px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-navy/90 sm:text-sm"
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
