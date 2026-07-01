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

const vorgehensweisen = [
  {
    title: "Beratung",
    desc: "Eine umfassende Erstberatung legt die Grundlage für alle weiteren Schritte. Ich analysiere Ihre Situation und erläutere Ihnen Ihre rechtlichen Möglichkeiten.",
  },
  {
    title: "Vertragsgestaltung",
    desc: "Ich entwerfe und prüfe Testamente, Erbverträge, Eheverträge und andere Dokumente – präzise formuliert und auf Ihre individuelle Situation zugeschnitten.",
  },
  {
    title: "Außergerichtliche und gerichtliche Vertretung",
    desc: "Ob Verhandlung am runden Tisch oder vor Gericht: Ich vertrete Ihre Interessen konsequent und nehme dafür auch weite Wege in Kauf.",
  },
];

export default function LeistungenPage() {
  return (
    <div style={{ paddingLeft: "124px", paddingRight: "124px" }} className="py-20">
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
            style={{
              borderTop: "1px solid #e0e0e0",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              display: "grid",
              gridTemplateColumns: "60px 1fr auto",
              gap: "2rem",
              alignItems: "center",
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

        {/* Vorgehensweisen */}
        <div className="mb-16">
          <h2 className="mb-8">Meine Vorgehensweisen</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {vorgehensweisen.map((v) => (
              <div key={v.title}>
                <p
                  className="mb-3"
                  style={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: "13px",
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
