import type { Metadata } from "next";
import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { ClientLogos } from "@/components/clients";
import { Coverage } from "@/components/coverage";
import { CTA } from "@/components/cta";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Industry40 } from "@/components/industry40";
import { Ombudsman } from "@/components/ombudsman";
import { Services } from "@/components/services";
import { getAlternates } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getI18n();
  return { alternates: getAlternates(locale, "/") };
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <ClientLogos />
      <Certifications />
      <Coverage />
      <Gallery />
      <Industry40 />
      <Services />
      <CTA />
      <Ombudsman />
    </main>
  );
}
