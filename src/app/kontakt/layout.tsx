import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – CGK Rechtsanwaltskanzlei Dormagen",
  description:
    "CGK Rechtsanwaltskanzlei in Dormagen. Telefonisch, per E-Mail oder über das Kontaktformular erreichbar. Jetzt Beratungstermin anfragen.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt – CGK Rechtsanwaltskanzlei Dormagen",
    description:
      "CGK Rechtsanwaltskanzlei in Dormagen. Telefonisch, per E-Mail oder über das Kontaktformular erreichbar. Jetzt Beratungstermin anfragen.",
    url: "/kontakt",
    siteName: "CGK Rechtsanwaltskanzlei",
    locale: "de_DE",
    type: "website",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
