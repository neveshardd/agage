import type { Icon } from "@tabler/icons-react";
import type { ServiceSlug } from "@/i18n/dictionaries";

export type ServiceAccent = "orange" | "blue";

export interface ServiceData {
  slug: ServiceSlug;
  icon: Icon;
  accent: ServiceAccent;
}
