import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kosten & Honorar – CGK Rechtsanwaltskanzlei Dormagen",
  description:
    "Transparente Honorare im Erbrecht & Familienrecht. Vergütungsvereinbarung, keine versteckten Kosten. Kostenschätzung vorab.",
  alternates: { canonical: "/kosten" },
  openGraph: {
    title: "Kosten & Honorar – CGK Rechtsanwaltskanzlei Dormagen",
    description:
      "Transparente Honorare im Erbrecht & Familienrecht. Vergütungsvereinbarung, keine versteckten Kosten. Kostenschätzung vorab.",
    url: "/kosten",
    siteName: "CGK Rechtsanwaltskanzlei",
    locale: "de_DE",
    type: "website",
  },
};

const vorteile = [
  {
    title: "Transparenz",
    desc: "Durch die Abrechnung nach Stundensätzen können Sie jederzeit nachvollziehen, wie sich die Kosten zusammensetzen. Ich schreibe Ihnen detailliert auf, was ich für Sie getan und wie lange ich dafür gebraucht habe.",
  },
  {
    title: "Kostenersparnis",
    desc: `Pauschalvereinbarungen sind beliebt, in vielen Fällen aber teurer als Stundensätze. Denn bei der Kalkulation müssen Kanzleien einen „Sicherheitsaufschlag” für unvorhergesehene Arbeiten vornehmen. Bei mir zahlen Sie nur, was tatsächlich geleistet wird.`,
  },
  {
    title: "Effizienz",
    desc: "Im Erbrecht und Familienrecht kenne ich mich aus. Weil ich mich nicht erst einarbeiten muss, bin ich schneller und kann diesen Effizienzvorteil direkt an Sie weitergeben. Geringere Kosten ohne Abstriche bei der Qualität.",
  },
];

export default function KostenPage() {
  return (
    <div style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }} className="py-20">
      <div className="max-w-[980px] mx-auto">
        <h1>Kosten</h1>

        {/* Intro */}
        <p className="mb-4" style={{ maxWidth: "680px" }}>
          Welche Kosten kommen auf mich zu? Diese Frage ist für Sie natürlich
          besonders wichtig – und deshalb rede ich hier auch nicht drumherum.
        </p>
        <p className="mb-16" style={{ maxWidth: "680px" }}>
          Generell gilt: Sie erhalten immer ein schriftliches Angebot mit
          meinen Konditionen, bevor Sie mich beauftragen. Ich sage Ihnen
          vorher offen und ehrlich, mit welchem Betrag Sie rechnen müssen. Bei
          mir gibt es keine versteckten Kosten.
        </p>

        {/* Abrechnung */}
        <div className="mb-16">
          <h2 className="mb-5">Wie rechne ich ab?</h2>
          <p style={{ maxWidth: "680px" }}>
            In der Regel rechne ich nach Stunden ab, wobei die Gebühren nach
            dem Rechtsanwaltsvergütungsgesetz (RVG) die Untergrenze bilden. Sie
            erhalten monatlich eine detaillierte Aufstellung meiner
            Tätigkeiten. Vorab gebe ich Ihnen eine Kostenschätzung und Sie
            können mir ein Limit für die Bearbeitung setzen.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#797979]/20 mb-16" />

        {/* Vorteile */}
        <div className="mb-16">
          <h2 className="mb-8">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {vorteile.map((v) => (
              <div key={v.title}>
                <p
                  className="mb-3"
                  style={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: "15px",
                    color: "#797979",
                  }}
                >
                  {v.title}
                </p>
                <p style={{ fontSize: "15px", lineHeight: "26px" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#797979]/20 mb-16" />

        {/* Stundensätze */}
        <div className="mb-16">
          <h2 className="mb-8">Stundensätze</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="p-8"
              style={{ background: "#F8F7F7" }}
            >
              <p
                className="mb-2"
                style={{
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: "13px",
                  color: "#797979",
                }}
              >
                Unternehmen
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#2C5F3A",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                345,00 €
              </p>
              <p
                className="mt-1"
                style={{ fontSize: "13px", color: "#797979", letterSpacing: "0.05em" }}
              >
                zzgl. MwSt.
              </p>
              <p className="mt-4" style={{ fontSize: "14px", lineHeight: "22px" }}>
                Soloselbstständige, Existenzgründer:innen und Start-ups erhalten
                Sonderkonditionen.
              </p>
            </div>
            <div
              className="p-8"
              style={{ background: "#F8F7F7" }}
            >
              <p
                className="mb-2"
                style={{
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: "13px",
                  color: "#797979",
                }}
              >
                Verbraucher:innen & gemeinnützige Vereine
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#2C5F3A",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                285,00 €
              </p>
              <p
                className="mt-1"
                style={{ fontSize: "13px", color: "#797979", letterSpacing: "0.05em" }}
              >
                inkl. MwSt.
              </p>
              <p className="mt-4" style={{ fontSize: "14px", lineHeight: "22px" }}>
                Ich gehe auf individuelle Bedürfnisse ein.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/kontakt"
          className="hover:text-[#2C5F3A] transition-colors duration-200"
          style={{
            display: "inline-block",
            border: "1px solid #797979",
            borderRadius: "5px",
            padding: "7px 16px",
            fontSize: "14px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#797979",
          }}
        >
          Angebot anfragen
        </Link>
      </div>
    </div>
  );
}
