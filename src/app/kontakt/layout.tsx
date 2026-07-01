import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – CGK Rechtsanwaltskanzlei Dormagen",
  description:
    "CGK Rechtsanwaltskanzlei in Dormagen. Telefonisch, per E-Mail oder über das Kontaktformular erreichbar. Jetzt Beratungstermin anfragen.",
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
