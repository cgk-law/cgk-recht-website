import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rechtsanwältin Erbrecht Dormagen – CGK Rechtsanwaltskanzlei",
  description:
    "Beratung und Vertretung im Erbrecht in Dormagen: Testamentsgestaltung, Pflichtteilsrecht, Erbengemeinschaft, Nachlassabwicklung.",
  alternates: { canonical: "/leistungen/erbrecht" },
  openGraph: {
    title: "Rechtsanwältin Erbrecht Dormagen – CGK Rechtsanwaltskanzlei",
    description:
      "Beratung und Vertretung im Erbrecht in Dormagen: Testamentsgestaltung, Pflichtteilsrecht, Erbengemeinschaft, Nachlassabwicklung.",
    url: "/leistungen/erbrecht",
    siteName: "CGK Rechtsanwaltskanzlei",
    locale: "de_DE",
    type: "website",
  },
};

const schwerpunkte = [
  {
    title: "Testament & Erbvertrag",
    intro:
      "Ein Testament oder Erbvertrag schafft Klarheit und ermöglicht es Ihnen, Ihren Nachlass nach Ihren persönlichen Vorstellungen zu gestalten. So können individuelle Wünsche berücksichtigt, Angehörige abgesichert und spätere Konflikte vermieden werden. Ich berate Sie bei der Gestaltung, Prüfung und Anpassung letztwilliger Verfügungen und entwickle gemeinsam mit Ihnen eine auf Ihre persönliche und familiäre Situation abgestimmte Lösung.",
    items: [
      "Gestaltung von Testamenten",
      "Gestaltung von Erbverträgen",
      "Prüfung bestehender Verfügungen",
      "Berliner Testament",
      "Testamente für Patchworkfamilien",
      "Behindertentestament",
    ],
  },
  {
    title: "Nachlassabwicklung",
    intro:
      "Die Nachlassabwicklung bringt häufig zahlreiche rechtliche und organisatorische Herausforderungen mit sich. Ich begleite Sie bei allen erforderlichen Schritten und unterstütze Sie dabei, den Nachlass strukturiert und rechtssicher abzuwickeln.",
    items: [
      "Prüfung der Erbfolge",
      "Annahme und Ausschlagung der Erbschaft",
      "Erbschein und Nachweis der Erbenstellung",
      "Korrespondenz mit Banken, Versicherungen und Behörden",
      "Erstellung eines Nachlassverzeichnisses",
      "Testamentsvollstreckung",
    ],
  },
  {
    title: "Erbengemeinschaft",
    intro:
      "Sind Sie Teil einer Erbengemeinschaft geworden, unterstütze ich Sie bei allen Fragen rund um die Verwaltung, Nutzung und Aufteilung des Nachlasses. Auch bei Streitigkeiten über Schenkungen, Kontovollmachten oder Pflegeleistungen begleite ich Sie bei der Klärung der rechtlichen Situation und der Wahrung Ihrer Interessen. Da Erbengemeinschaften häufig konfliktbehaftet sind, ist eine frühzeitige, klare und strukturierte rechtliche Begleitung besonders wichtig.",
    items: [
      "Rechte und Pflichten der Miterben",
      "Haftung für Nachlassverbindlichkeiten",
      "Ausgleichung unter Miterben",
      "Auseinandersetzung und Beendigung der Erbengemeinschaft",
    ],
  },
  {
    title: "Erbprozess",
    intro:
      "Nicht jede erbrechtliche Auseinandersetzung lässt sich außergerichtlich lösen. Ist eine Einigung nicht möglich, vertrete ich Ihre Interessen konsequent vor Gericht und begleite Sie durch das gesamte Verfahren. Dabei behalte ich Ihre persönlichen und wirtschaftlichen Interessen stets im Blick.",
    items: [
      "Auskunftsklage",
      "Erbenfeststellungsklage",
      "Pflichtteilsklage",
      "Streitigkeiten innerhalb von Erbengemeinschaften",
      "Testamentsanfechtung",
      "Herausgabe von Nachlassgegenständen",
    ],
  },
  {
    title: "Pflichtteilsrecht",
    intro:
      "Pflichtteilsansprüche spielen nach einem Erbfall häufig eine zentrale Rolle. Ich unterstütze Sie bei der Prüfung, Geltendmachung oder Abwehr von Pflichtteilsansprüchen und begleite Sie bei allen damit verbundenen rechtlichen Fragestellungen.",
    items: [
      "Berechnung von Pflichtteilsansprüchen",
      "Geltendmachung von Pflichtteilsansprüchen",
      "Abwehr von Pflichtteilsforderungen",
      "Pflichtteilsergänzungsansprüche",
      "Pflichtteilsentziehung",
      "Pflichtteilsverzicht",
    ],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "Erbrecht", item: `${SITE_URL}/leistungen/erbrecht` },
  ],
};

export default function ErbrechtPage() {
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

        <h1>Erbrecht</h1>
        <p className="mb-16" style={{ maxWidth: "640px", fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
          Ob vorausschauende Nachlassgestaltung oder die Lösung eines bereits bestehenden Konflikts – erbrechtliche Fragen sind häufig mit persönlichen, familiären und wirtschaftlichen Entscheidungen verbunden. Umso wichtiger ist eine Beratung, die rechtliche Klarheit schafft, individuelle Interessen berücksichtigt und auch in komplexen Situationen Orientierung bietet.
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
            Sie möchten Ihr Testament aufsetzen, eine Erbengemeinschaft klären
            oder sich zu Pflichtteilsansprüchen beraten lassen?
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
