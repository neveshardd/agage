import type { ComponentType } from "react";
import type { ServiceSlug } from "@/i18n/dictionaries";

export type ServiceAccent = "orange" | "blue";

export interface ServiceData {
  slug: ServiceSlug;
  icon: ComponentType<{ className?: string }>;
  accent: ServiceAccent;
}
