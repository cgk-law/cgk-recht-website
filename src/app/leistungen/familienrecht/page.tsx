import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rechtsanwältin Familienrecht Dormagen – CGK Rechtsanwaltskanzlei",
  description:
    "Beratung und Vertretung im Familienrecht in Dormagen: Ehevertrag, Scheidung, Kindschaftsrecht, Scheidungsfolgenvereinbarung, Vermögensauseinandersetzung.",
  alternates: { canonical: "/leistungen/familienrecht" },
  openGraph: {
    title: "Rechtsanwältin Familienrecht Dormagen – CGK Rechtsanwaltskanzlei",
    description:
      "Beratung und Vertretung im Familienrecht in Dormagen: Ehevertrag, Scheidung, Kindschaftsrecht, Scheidungsfolgenvereinbarung, Vermögensauseinandersetzung.",
    url: "/leistungen/familienrecht",
    siteName: "CGK Rechtsanwaltskanzlei",
    locale: "de_DE",
    type: "website",
  },
};

const schwerpunkte = [
  {
    title: "Eheverträge",
    intro:
      "Ein Ehevertrag schafft Klarheit und ermöglicht es Ehepartnern, ihre rechtlichen und wirtschaftlichen Verhältnisse individuell zu gestalten. Ob vor oder während der Ehe geschlossen – durch maßgeschneiderte Regelungen können spätere Unsicherheiten und Konflikte vermieden werden. Ich berate Sie bei der Gestaltung und Prüfung von Eheverträgen und entwickle gemeinsam mit Ihnen eine auf Ihre persönliche Lebenssituation abgestimmte Lösung.",
    items: [
      "Güterstand",
      "Vermögensaufteilung",
      "Unterhalt",
      "Versorgungsausgleich",
      "Unternehmerehen / Immobilienvermögen",
    ],
  },
  {
    title: "Scheidung",
    intro:
      "Eine Trennung oder Scheidung ist häufig mit persönlichen, wirtschaftlichen und rechtlichen Veränderungen verbunden. Ich berate und begleite Sie bei allen mit der Trennung verbundenen Fragestellungen und unterstütze Sie dabei, rechtliche Klarheit zu schaffen und tragfähige Lösungen für die Zukunft zu finden. Dabei kann eine frühzeitige einvernehmliche Regelung der Scheidungsfolgen dazu beitragen, Konflikte zu vermeiden und das Verfahren zu vereinfachen.",
    items: [
      "Trennung und Scheidung",
      "Ehewohnung",
      "Ehegatten- und Kindesunterhalt",
      "Zugewinnausgleich",
      "Versorgungsausgleich",
      "Sorge- und Umgangsrecht",
      "Scheidungsfolgenvereinbarung",
    ],
  },
  {
    title: "Kindschaftsrecht",
    intro:
      "Kinder stehen bei Trennung und Scheidung häufig im Mittelpunkt vieler rechtlicher und persönlicher Fragen. Ziel sollte es sein, Lösungen zu finden, die dem Kindeswohl gerecht werden und zugleich verlässliche Regelungen für die Zukunft schaffen. Ich berate und begleite Sie bei allen Fragen des Kindschaftsrechts und unterstütze Sie dabei, tragfähige und rechtssichere Vereinbarungen zu entwickeln.",
    items: [
      "Sorgerecht",
      "Aufenthaltsbestimmungsrecht",
      "Umgangsrecht",
      "Wechselmodell und andere Umgangsmodelle",
      "Kindesunterhalt",
      "Sorgerechtsverfügung",
    ],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "Familienrecht", item: `${SITE_URL}/leistungen/familienrecht` },
  ],
};

export default function FamilienrechtPage() {
  return (
    <div style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }} className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-[980px] mx-auto">

        {/* Zurück-Link */}
        <Link
          href="/leistungen"
          className="hover:text-[#2C5F3A] transition-colors duration-200"
          style={{
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#b0b0b0",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "2.5rem",
          }}
        >
          ← Leistungen
        </Link>

        <h1>Familienrecht</h1>
        <p className="mb-16" style={{ maxWidth: "640px", fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
          Familienrechtliche Angelegenheiten gehen häufig mit persönlichen Veränderungen und emotionalen Belastungen einher. In solchen Situationen ist es wichtig, den Überblick zu behalten und Entscheidungen auf einer verlässlichen rechtlichen Grundlage zu treffen. Ich unterstütze Sie dabei mit einer klaren, strukturierten und lösungsorientierten Beratung.
        </p>

        {/* Schwerpunkte */}
        <h2 style={{ marginBottom: "2rem" }}>Schwerpunkte</h2>
        <div>
          {schwerpunkte.map((s) => (
            <details
              key={s.title}
              style={{ borderTop: "1px solid #e0e0e0" }}
              className="group"
            >
              <summary
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  cursor: "pointer",
                  listStyle: "none",
                  userSelect: "none",
                }}
                className="hover:text-[#2C5F3A] transition-colors duration-200 [&::-webkit-details-marker]:hidden"
              >
                <h3 style={{ margin: 0, fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 400, color: "inherit", letterSpacing: "0.01em", textTransform: "none" }}>
                  {s.title}
                </h3>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 300,
                    color: "#b0b0b0",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginLeft: "2rem",
                    transition: "transform 0.2s",
                  }}
                  className="group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div style={{ paddingBottom: "2rem" }}>
                <p style={{ fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300, maxWidth: "680px", marginBottom: "1.25rem" }}>
                  {s.intro}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {s.items.map((item) => (
                    <li
                      key={item}
                      style={{ fontSize: "15px", lineHeight: "26px", color: "#797979", display: "flex", gap: "0.75rem" }}
                    >
                      <span style={{ color: "#b0b0b0", flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
          <div style={{ borderTop: "1px solid #e0e0e0" }} />
        </div>

        <p className="mt-16" style={{ fontSize: "13px", color: "#797979" }}>
          Mehr zum Ablauf einer{" "}
          <Link href="/erstberatung" className="hover:text-[#2C5F3A] transition-colors duration-200" style={{ textDecoration: "underline" }}>
            Erstberatung
          </Link>
          .
        </p>

        {/* CTA */}
        <div className="py-12 px-10 mt-6" style={{ background: "#F8F7F7" }}>
          <p className="mb-6" style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "560px" }}>
            Sie stehen vor einer familienrechtlichen Frage und möchten wissen,
            welche Optionen Sie haben?
          </p>
          <Link
            href="/kontakt"
            className="hover:text-[#2C5F3A] hover:border-[#2C5F3A] transition-colors duration-200"
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
            Beratungstermin anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
