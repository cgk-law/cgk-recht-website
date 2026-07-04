import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ConsentManager } from "@/components/ConsentManager";
import { SITE_URL } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Erbrecht & Familienrecht Dormagen – CGK Rechtsanwaltskanzlei",
  description:
    "Rechtsanwältin Carolin Gerring-Keil berät Sie in Dormagen individuell im Erb- und Familienrecht. Transparent, persönlich und rechtssicher.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Erbrecht & Familienrecht Dormagen – CGK Rechtsanwaltskanzlei",
    description:
      "Rechtsanwältin Carolin Gerring-Keil berät Sie in Dormagen individuell im Erb- und Familienrecht. Transparent, persönlich und rechtssicher.",
    url: siteUrl,
    siteName: "CGK Rechtsanwaltskanzlei",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erbrecht & Familienrecht Dormagen – CGK Rechtsanwaltskanzlei",
    description:
      "Rechtsanwältin Carolin Gerring-Keil berät Sie in Dormagen individuell im Erb- und Familienrecht. Transparent, persönlich und rechtssicher.",
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "CGK Rechtsanwaltskanzlei – Carolin Gerring-Keil",
  description:
    "Rechtsanwältin für Erbrecht und Familienrecht in Dormagen. Beratung und Vertretung in Testamentsgestaltung, Pflichtteilsrecht, Erbengemeinschaft, Scheidung und Vorsorge.",
  url: siteUrl,
  telephone: "+4921336309228",
  email: "kanzlei@cgk-recht.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mörikestraße 5",
    addressLocality: "Dormagen",
    postalCode: "41541",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0956,
    longitude: 6.8353,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: ["Dormagen", "Neuss", "Düsseldorf", "Köln", "Rhein-Kreis Neuss"],
  priceRange: "€€",
  sameAs: ["https://share.google/Dgfa6fjCGej5Xo53z"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <ConsentManager>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ConsentManager>
      </body>
    </html>
  );
}
