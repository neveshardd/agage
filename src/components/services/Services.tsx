import { getI18n } from "@/i18n/server";
import { SERVICES } from "./data";
import { ServiceCard } from "./ServiceCard";

export async function Services() {
  const { t } = await getI18n();

  return (
    <section
      id="servicos"
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-10"
    >
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-balance text-brand-navy sm:text-3xl lg:text-4xl">
        {t.servicesSection.title}
      </h2>

      <div className="mt-16 grid sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            title={t.services[service.slug].title}
            description={t.services[service.slug].description}
          />
        ))}
      </div>
    </section>
  );
}
