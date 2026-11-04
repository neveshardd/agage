import {
  IconCloudOff,
  IconDownload,
  IconExternalLink,
  IconFileText,
  IconFolderOpen,
  type TablerIcon,
} from "@tabler/icons-react";
import type { PublicDocument } from "@/lib/backoffice";

interface DocumentListProps {
  documents: PublicDocument[] | null;
  /** `lang` BCP 47 do idioma atual, para datas e tamanhos. */
  htmlLang: string;
  labels: {
    heading: string;
    empty: string;
    emptyHint: string;
    open: string;
    download: string;
    revision: string;
    updated: string;
    unavailable: string;
  };
}

function EmptyCard({
  icon: Icon,
  title,
  hint,
}: {
  icon: TablerIcon;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm">
        <Icon aria-hidden stroke={1.6} className="h-7 w-7" />
      </span>
      <p className="mt-5 text-lg font-bold text-brand-navy">{title}</p>
      {hint ? (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function formatSize(bytes: number, lang: string) {
  const megabytes = bytes / (1024 * 1024);
  const formatter = new Intl.NumberFormat(lang, { maximumFractionDigits: 1 });
  return megabytes >= 1
    ? `${formatter.format(megabytes)} MB`
    : `${formatter.format(bytes / 1024)} KB`;
}

export function DocumentList({
  documents,
  htmlLang,
  labels,
}: DocumentListProps) {
  const dateFormatter = new Intl.DateTimeFormat(htmlLang, {
    dateStyle: "medium",
    timeZone: "America/Sao_Paulo",
  });

  return (
    <section
      aria-labelledby="documents-heading"
      className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10"
    >
      <h2
        id="documents-heading"
        className="text-2xl font-bold text-balance text-brand-navy sm:text-3xl lg:text-4xl"
      >
        {labels.heading}
      </h2>

      {documents === null ? (
        <EmptyCard icon={IconCloudOff} title={labels.unavailable} />
      ) : documents.length === 0 ? (
        <EmptyCard
          icon={IconFolderOpen}
          title={labels.empty}
          hint={labels.emptyHint}
        />
      ) : (
        <ul className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {documents.map((document) => (
            <li
              key={document.id}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div className="flex min-w-0 items-start gap-4">
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange-dark sm:flex">
                  <IconFileText aria-hidden stroke={1.6} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wider text-brand-orange-dark uppercase">
                    {document.code}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-brand-navy">
                    {document.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {labels.revision} {document.revision} · {labels.updated}{" "}
                    <time dateTime={document.updatedAt}>
                      {dateFormatter.format(new Date(document.updatedAt))}
                    </time>{" "}
                    · PDF, {formatSize(document.fileSize, htmlLang)}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-3">
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors duration-150 hover:bg-brand-navy hover:text-white"
                  aria-label={`${labels.open}: ${document.title} (PDF)`}
                >
                  <IconExternalLink aria-hidden className="h-4 w-4" />
                  {labels.open}
                </a>
                <a
                  href={document.downloadUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-brand-navy/90"
                  aria-label={`${labels.download}: ${document.title} (PDF)`}
                >
                  <IconDownload aria-hidden className="h-4 w-4" />
                  {labels.download}
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
