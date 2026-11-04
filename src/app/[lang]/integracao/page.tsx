import { IconHeartHandshake } from "@tabler/icons-react";
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
    title: t.collaborator.onboarding.title,
    description: t.collaborator.onboarding.metaDescription,
    alternates: getAlternates(locale, "/integracao"),
  };
}

export default async function OnboardingPage() {
  const { locale, t, images } = await getI18n();
  const copy = t.collaborator.onboarding;
  const content = await getAreaContent("onboarding");

  return (
    <main className="flex flex-1 flex-col">
      <PageHeader
        title={copy.title}
        image={images["pages.onboarding"]}
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
          <ul
            className="mt-8 flex flex-wrap gap-3"
            aria-label={copy.pillars.join(", ")}
          >
            {copy.pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full bg-brand-navy px-4 py-2 text-xs font-bold tracking-wider text-white uppercase"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </section>

        <TrainingVideo
          video={content?.video ?? null}
          labels={t.collaborator.video}
        />

        <ContentSections sections={copy.sections} />

        <Callout icon={IconHeartHandshake} text={copy.closing} />

        <DocumentList
          documents={content?.documents ?? null}
          htmlLang={HTML_LANG[locale]}
          labels={t.collaborator.documents}
        />
      </div>
    </main>
  );
}
