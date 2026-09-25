import type { ServiceData } from "./types";

const ICON_ACCENT_STYLES = {
  orange: "text-brand-orange",
  blue: "text-brand-blue",
} as const;

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

  return (
    <div className="flex h-full flex-col gap-3 border border-brand-blue p-6">
      <div className="flex items-center gap-3">
        <Icon
          className={`h-7 w-7 shrink-0 ${ICON_ACCENT_STYLES[service.accent]}`}
        />
        <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
