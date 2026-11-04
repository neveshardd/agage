import type { Metadata } from "next";
import { DocumentList } from "@/components/collaborator";
import { PageHeader } from "@/components/page-header";
import { HTML_LANG } from "@/i18n/config";
import { getAlternates } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";
import { getAreaContent } from "@/lib/backoffice";

/** Documentos vigentes vêm do backoffice; a página é regenerada a cada minuto. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return {
    title: t.collaborator.institutional.title,
    description: t.collaborator.institutional.metaDescription,
    alternates: getAlternates(locale, "/documentos"),
  };
}

export default async function InstitutionalDocumentsPage() {
  const { locale, t, images } = await getI18n();
  const copy = t.collaborator.institutional;
  const content = await getAreaContent("institutional");

  return (
    <main className="flex flex-1 flex-col">
      <PageHeader
        title={copy.title}
        image={images["pages.documents"]}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.collaborator.menuHeading, href: "/integracao" },
        ]}
      />

      <div className="flex flex-col gap-12 py-16 sm:py-20">
        <section className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
          <p className="max-w-4xl text-lg leading-relaxed text-brand-navy sm:text-xl">
            {copy.intro}
          </p>
        </section>

        <DocumentList
          documents={content?.documents ?? null}
          htmlLang={HTML_LANG[locale]}
          labels={t.collaborator.documents}
        />
      </div>
    </main>
  );
}
