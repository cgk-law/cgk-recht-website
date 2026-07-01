import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen – CGK Rechtsanwaltskanzlei Dormagen",
  description:
    "Beratung und Vertretung im Erbrecht und Familienrecht in Dormagen. Testamente, Erbverträge, Scheidungsfolgen, Vorsorgevollmacht und mehr.",
};

const bereiche = [
  {
    href: "/leistungen/erbrecht",
    label: "Erbrecht",
    desc: "Testamentsgestaltung, Pflichtteilsrecht, Erbengemeinschaft, Nachlassabwicklung",
  },
  {
    href: "/leistungen/familienrecht",
    label: "Familienrecht",
    desc: "Ehevertrag, Scheidung, Kindschaftsrecht, Scheidungsfolgenvereinbarung, Vermögensauseinandersetzung",
  },
  {
    href: "/leistungen/vorsorge",
    label: "Vorsorge",
    desc: "Vorsorgevollmacht, Patientenverfügung, Sorgerechtsverfügung",
  },
];

const unterstuetzung = [
  {
    titel: "Beratung",
    text: "Die Erstberatung bildet die Grundlage für die weitere Bearbeitung Ihres Anliegens. Ich analysiere Ihre Situation, erläutere Ihnen verständlich Ihre rechtlichen Möglichkeiten und zeige Ihnen die nächsten sinnvollen Schritte auf.",
  },
  {
    titel: "Vertragsgestaltung",
    text: "Ich entwerfe und prüfe Testamente, Eheverträge und weitere rechtliche Vereinbarungen – präzise formuliert und auf Ihre persönliche Situation abgestimmt. Ziel ist es, klare und rechtssichere Regelungen zu schaffen, die Ihre Interessen langfristig absichern.",
  },
  {
    titel: "Außergerichtliche und gerichtliche Vertretung",
    text: "Ich vertrete Ihre Interessen außergerichtlich und gerichtlich mit Engagement und Sorgfalt. Dabei behalte ich Ihre persönlichen und wirtschaftlichen Ziele stets im Blick und setze mich konsequent für Ihre Interessen ein.",
  },
];

export default function LeistungenPage() {
  return (
    <div style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }} className="py-20">
      <div className="max-w-[980px] mx-auto">
        <h1>Leistungen</h1>
        <p className="mb-16" style={{ maxWidth: "640px" }}>
          Ich berate Sie individuell und entscheide dann mit Ihnen gemeinsam
          über die für Sie erfolgversprechendste Vorgehensweise – ob Beratung,
          außergerichtliche Verhandlungen, ein alternatives
          Konfliktlösungsverfahren oder ein gerichtliches Verfahren.
        </p>

        {/* Bereiche */}
        {bereiche.map((item, i) => (
          <div
            key={item.label}
            className="flex flex-col gap-4 md:grid md:items-center md:[grid-template-columns:60px_1fr_auto] md:gap-8"
            style={{
              borderTop: "1px solid #e0e0e0",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <span style={{ fontSize: "12px", color: "#b0b0b0", letterSpacing: "0.15em", fontWeight: 500 }}>
              0{i + 1}
            </span>
            <div>
              <h2 className="mb-2">{item.label}</h2>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#797979", maxWidth: "520px" }}>
                {item.desc}
              </p>
            </div>
            <Link
              href={item.href}
              className="hover:text-[#2C5F3A] hover:border-[#2C5F3A] transition-colors duration-200"
              style={{
                display: "inline-block",
                border: "1px solid #797979",
                borderRadius: "5px",
                padding: "7px 20px",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#797979",
                whiteSpace: "nowrap",
              }}
            >
              Mehr erfahren
            </Link>
          </div>
        ))}
        <div style={{ borderTop: "1px solid #e0e0e0", marginBottom: "5rem" }} />

        {/* Wie ich Sie unterstütze */}
        <h2 className="mb-6">Wie ich Sie unterstütze</h2>
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-0" style={{ background: "#F8F7F7" }}>
          {unterstuetzung.map((item, i) => (
            <div
              key={item.titel}
              className={i > 0 ? "flex flex-col border-t border-[#e0e0e0] md:border-t-0 md:border-l" : "flex flex-col"}
              style={{ padding: "2rem" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#2C5F3A",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {item.titel}
              </p>
              <p style={{ fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="py-12 px-10" style={{ background: "#F8F7F7" }}>
          <p className="mb-6" style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "560px" }}>
            Sie haben Fragen zu einem dieser Bereiche oder möchten einen ersten
            Beratungstermin vereinbaren?
          </p>
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
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
