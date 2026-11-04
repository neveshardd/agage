import type { ServiceAccent, ServiceData } from "./types";

// Classes completas (não interpoladas) para o Tailwind encontrá-las.
const ACCENT_STYLES: Readonly<
  Record<ServiceAccent, { tile: string; bar: string }>
> = {
  // Ambos em cinza: os cards ficavam coloridos demais com laranja/azul.
  orange: {
    tile: "bg-slate-100 text-slate-500",
    bar: "bg-slate-300",
  },
  blue: {
    tile: "bg-slate-100 text-slate-500",
    bar: "bg-slate-300",
  },
};

export function ServiceCard({
  service,
  title,
  description,
}: {
  service: ServiceData;
  title: string;
  description: string;
}) {
  const Icon = service.icon;
  const accent = ACCENT_STYLES[service.accent];

  return (
    <article
      data-reveal
      className="relative flex h-full flex-col gap-5 bg-white p-7 sm:p-8"
    >
      <span
        aria-hidden
        className={`absolute top-0 left-7 h-1 w-10 rounded-b-sm sm:left-8 ${accent.bar}`}
      />

      <div className="flex items-start justify-between gap-4">
        <h3 className="pt-1 text-lg leading-snug font-bold text-brand-navy">
          {title}
        </h3>
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${accent.tile}`}
        >
          <Icon aria-hidden stroke={1.6} className="h-7 w-7" />
        </span>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
}
