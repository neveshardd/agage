import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { BrazilMap } from "./BrazilMap";
import { COVERAGE_LOCATIONS } from "./data";
import { ArrowIcon } from "./icons/ArrowIcon";
import { projectPoint } from "./projection";

// Projetado uma vez no servidor, para o navegador não precisar do d3.
const LOCATIONS = COVERAGE_LOCATIONS.map((location) => ({
  ...location,
  point: projectPoint(location.coordinates),
}));

export async function Coverage() {
  const { locale, t } = await getI18n();

  return (
    <section
      id="onde-atuamos"
      className="relative overflow-hidden py-20 sm:py-24 lg:min-h-170"
    >
      <div
        className="absolute inset-y-0 hidden lg:block"
        style={{ right: "max(90px, calc((100vw - 1280px) / 2 + 90px))" }}
      >
        <BrazilMap locations={LOCATIONS} />

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-120"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="pointer-events-auto lg:max-w-120">
          <h2 className="text-3xl font-bold text-balance text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {t.coverage.title}
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.coverage.paragraphs[0]}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.coverage.paragraphs[1]}
          </p>

          <Link
            href={localizeHref(locale, "/#obras")}
            className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-blue px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-blue-dark"
          >
            {t.coverage.cta}
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
