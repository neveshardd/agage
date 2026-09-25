import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HTML_LANG, LOCALES } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";
import { SITE_NAME, SITE_URL } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";
import "../globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

// Dados estruturados usados pelo Google para exibir o nome do site ("AGAGE")
// nos resultados de busca.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/agage.png`,
      email: "engenharia@agage.com.br",
    },
  ],
};

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    description: t.meta.description,
    applicationName: SITE_NAME,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: t.meta.description,
      locale: HTML_LANG[locale].replace("-", "_"),
      images: [{ url: "/mao-de-obra.jpg", width: 2560, height: 1354 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, t } = await getI18n();

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático gerado no servidor.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <I18nProvider locale={locale} t={t}>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
