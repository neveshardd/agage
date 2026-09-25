import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { PageHeader } from "@/components/page-header";
import { getAlternates } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();

  return {
    title: t.mvv.title,
    description: t.mvv.missionText,
    alternates: getAlternates(locale, "/missao-visao-e-valores"),
  };
}

export default async function MissionVisionValuesPage() {
  const { t } = await getI18n();

  return (
    <main className="flex flex-1 flex-col">
      <PageHeader
        title={t.mvv.title}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.mvv.agage, href: "/#sobre" },
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border-t-4 border-brand-orange bg-slate-50 p-8 sm:p-10">
            <h2 className="text-sm font-bold tracking-wide text-brand-orange uppercase">
              {t.mvv.mission}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-navy sm:text-xl">
              {t.mvv.missionText}
            </p>
          </article>

          <article className="border-t-4 border-brand-blue bg-slate-50 p-8 sm:p-10">
            <h2 className="text-sm font-bold tracking-wide text-brand-blue uppercase">
              {t.mvv.vision}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-navy sm:text-xl">
              {t.mvv.visionText}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {t.mvv.valuesTitle}
          </h2>

          <ol className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {t.mvv.values.map((value, index) => (
              <li key={value} className="bg-brand-navy p-6">
                <span className="text-sm font-bold text-brand-orange tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-bold">{value}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </main>
  );
}
