import { IconAlertTriangle } from "@tabler/icons-react";
import type { Metadata } from "next";
import {
  Callout,
  ContentSections,
  DocumentList,
  TrainingVideo,
} from "@/components/collaborator";
import { PageHeader } from "@/components/page-header";
import { HTML_LANG } from "@/i18n/config";
import { getAlternates } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";
import { getAreaContent } from "@/lib/backoffice";

/** Vídeo e documentos vêm do backoffice; a página é regenerada a cada minuto. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return {
    title: t.collaborator.safety.title,
    description: t.collaborator.safety.metaDescription,
    alternates: getAlternates(locale, "/seguranca-do-trabalho"),
  };
}

export default async function OccupationalSafetyPage() {
  const { locale, t, images } = await getI18n();
  const copy = t.collaborator.safety;
  const content = await getAreaContent("occupational-safety");

  return (
    <main className="flex flex-1 flex-col">
      <PageHeader
        title={copy.title}
        image={images["pages.safety"]}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.collaborator.menuHeading, href: "/integracao" },
        ]}
      />

      <div className="flex flex-col gap-16 py-16 sm:gap-20 sm:py-20">
        <section className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <p className="max-w-4xl text-lg leading-relaxed text-brand-navy sm:text-xl">
            {copy.intro}
          </p>
        </section>

        <TrainingVideo
          video={content?.video ?? null}
          labels={t.collaborator.video}
        />

        <section
          aria-labelledby="programs-heading"
          className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10"
        >
          <div className="rounded-2xl bg-brand-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
            <h2
              id="programs-heading"
              className="text-2xl font-bold text-balance sm:text-3xl lg:text-4xl"
            >
              {copy.programsTitle}
            </h2>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {copy.programs.map((program) => (
                <li
                  key={program.acronym}
                  className="rounded-xl bg-white p-6 text-brand-navy sm:p-7"
                >
                  <p className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                    <span className="rounded-full bg-brand-orange px-2.5 py-1 text-white">
                      {program.acronym}
                    </span>
                    {program.norm ? (
                      <span className="text-slate-500">{program.norm}</span>
                    ) : null}
                  </p>
                  <h3 className="mt-4 text-lg leading-snug font-bold">
                    {program.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {program.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContentSections sections={copy.sections} />

        <Callout icon={IconAlertTriangle} text={copy.closing} />

        <DocumentList
          documents={content?.documents ?? null}
          htmlLang={HTML_LANG[locale]}
          labels={t.collaborator.documents}
        />
      </div>
    </main>
  );
}
