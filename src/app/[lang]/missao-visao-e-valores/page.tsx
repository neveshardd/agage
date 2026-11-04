import {
  IconHeartHandshake,
  IconScale,
  IconShieldCheck,
  IconTarget,
  IconUsersGroup,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { getAlternates } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";

// Um ícone por valor, na ordem de `mvv.values` nos dicionários.
const VALUE_ICONS = [
  IconShieldCheck,
  IconTarget,
  IconScale,
  IconUsersGroup,
  IconHeartHandshake,
];

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();

  return {
    title: t.mvv.title,
    description: t.mvv.missionText,
    alternates: getAlternates(locale, "/missao-visao-e-valores"),
  };
}

export default async function MissionVisionValuesPage() {
  const { t, images } = await getI18n();

  return (
    <main className="flex flex-1 flex-col">
      <PageHeader
        title={t.mvv.title}
        image={images["pages.mvv"]}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.mvv.agage, href: "/#sobre" },
        ]}
      />

      <section className="mx-auto w-full max-w-screen-2xl px-6 py-16 sm:py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <article
            data-reveal
            className="relative rounded-2xl border border-slate-200 bg-slate-100 p-8 sm:p-10"
          >
            <h2 className="text-xs font-semibold tracking-wider text-brand-orange-dark uppercase">
              {t.mvv.mission}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-navy sm:text-xl">
              {t.mvv.missionText}
            </p>
          </article>

          <article
            data-reveal
            className="relative rounded-2xl border border-slate-200 bg-slate-100 p-8 sm:p-10"
          >
            <h2 className="text-xs font-semibold tracking-wider text-brand-blue uppercase">
              {t.mvv.vision}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-navy sm:text-xl">
              {t.mvv.visionText}
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-6 pb-16 sm:pb-20 lg:px-10">
        <div
          data-reveal
          className="rounded-2xl bg-brand-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14"
        >
          <h2 className="text-2xl font-bold text-balance sm:text-3xl lg:text-4xl">
            {t.mvv.valuesTitle}
          </h2>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.mvv.values.map((value, index) => {
              const Icon = VALUE_ICONS[index] ?? IconShieldCheck;
              return (
                <li
                  key={value}
                  className="flex flex-col gap-5 rounded-xl bg-white p-6 text-brand-navy"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-dark">
                    <Icon aria-hidden stroke={1.6} className="h-6 w-6" />
                  </span>
                  <p className="text-lg leading-snug font-bold">{value}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}
