import Image from "next/image";
import { getI18n } from "@/i18n/server";

export async function About() {
  const { t } = await getI18n();

  return (
    <section id="sobre" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-full w-full rounded-lg bg-brand-orange sm:-top-8 sm:-left-8" />
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/quem-somos.jpg"
              alt={t.about.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-balance text-brand-navy sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
