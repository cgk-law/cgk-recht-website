import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vorsorgevollmacht & Patientenverfügung Dormagen – CGK Rechtsanwaltskanzlei",
  description:
    "Beratung zu Vorsorgevollmacht, Patientenverfügung und Sorgerechtsverfügung in Dormagen – individuell und rechtssicher.",
};

const schwerpunkte = [
  {
    title: "Vorsorgevollmacht",
    intro:
      "Mit einer Vorsorgevollmacht können Sie frühzeitig festlegen, wer Sie im Bedarfsfall rechtlich vertreten und wichtige Entscheidungen für Sie treffen darf. Eine sorgfältig gestaltete Vorsorgevollmacht schafft Klarheit, stärkt Ihre Selbstbestimmung und kann dazu beitragen, eine gerichtliche Betreuung zu vermeiden. Ich unterstütze Sie bei der Erstellung einer individuellen und rechtssicheren Vorsorgevollmacht, die auf Ihre persönliche Lebenssituation abgestimmt ist.",
    items: [
      "General- und Vorsorgevollmacht",
      "Gesundheitsangelegenheiten",
      "Vermögensangelegenheiten",
      "Bank- und Behördenangelegenheiten",
      "Vertretung gegenüber Ärzten und Pflegeeinrichtungen",
      "Individuelle Gestaltung und Prüfung von Vollmachten",
    ],
  },
  {
    title: "Patientenverfügung",
    intro:
      "Mit einer Patientenverfügung legen Sie fest, welche medizinischen Maßnahmen Sie in bestimmten Behandlungssituationen wünschen oder ablehnen. So stellen Sie sicher, dass Ihr persönlicher Wille auch dann berücksichtigt wird, wenn Sie selbst keine Entscheidungen mehr treffen können. Gleichzeitig schafft sie Klarheit für Angehörige und behandelnde Ärzte und erleichtert Entscheidungen in einer oft belastenden Situation. Ich unterstütze Sie dabei, eine rechtssichere und auf Ihre persönlichen Vorstellungen abgestimmte Patientenverfügung zu erstellen.",
    items: [
      "Individuelle Gestaltung der Patientenverfügung",
      "Medizinische Behandlungswünsche",
      "Lebenserhaltende Maßnahmen",
      "Prüfung bestehender Patientenverfügungen",
    ],
  },
  {
    title: "Sorgerechtsverfügung",
    intro:
      "Mit einer Sorgerechtsverfügung können Eltern vorsorglich festlegen, wer sich um ihre minderjährigen Kinder kümmern soll, wenn sie die elterliche Sorge künftig nicht mehr ausüben können. So schaffen Sie frühzeitig Klarheit und geben dem Familiengericht eine wichtige Orientierung für seine Entscheidung. Ich berate Sie bei der Erstellung einer rechtssicheren und auf Ihre familiäre Situation abgestimmten Sorgerechtsverfügung.",
    items: [
      "Benennung eines Vormunds",
      "Ausschluss bestimmter Personen als Vormund",
      "Individuelle Gestaltung der Sorgerechtsverfügung",
    ],
  },
];

export default function VorsorgePage() {
  return (
    <div style={{ paddingLeft: "124px", paddingRight: "124px" }} className="py-20">
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

        <h1>Vorsorge</h1>
        <p className="mb-16" style={{ maxWidth: "640px", fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
          Niemand beschäftigt sich gerne mit Situationen, in denen man wichtige Entscheidungen nicht mehr selbst treffen kann. Umso wichtiger ist es, rechtzeitig die notwendigen Vorkehrungen zu treffen. Eine sorgfältige Vorsorge schafft Klarheit, stärkt die Selbstbestimmung und entlastet Angehörige in schwierigen Situationen, wenn Sie sich nicht mehr selbst äußern können. Ich berate Sie bei der Erstellung individueller und rechtssicherer Vorsorgedokumente, die auf Ihre persönliche Lebenssituation abgestimmt sind.
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
                <span style={{ fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 400, color: "inherit", letterSpacing: "0.01em" }}>
                  {s.title}
                </span>
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

        {/* CTA */}
        <div className="py-12 px-10 mt-16" style={{ background: "#F8F7F7" }}>
          <p className="mb-6" style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "560px" }}>
            Sie möchten frühzeitig Vorsorge treffen und rechtssichere Dokumente
            für den Ernstfall erstellen?
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
