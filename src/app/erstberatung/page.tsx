import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Erstberatung – CGK Rechtsanwaltskanzlei Dormagen",
  description:
    "Erstberatung im Erbrecht & Familienrecht in Dormagen. Persönlich in der Kanzlei oder per Videokonferenz über Microsoft Teams. Jetzt Termin vereinbaren.",
};

const steps = [
  {
    step: "01",
    title: "Erstkontakt",
    desc: "Sie erreichen die Kanzlei telefonisch, per E-Mail oder über das Kontaktformular. In einem ersten unverbindlichen Austausch besprechen wir Ihr Anliegen und vereinbaren einen zeitnahen Termin für die Erstberatung.",
  },
  {
    step: "02",
    title: "Analysebogen ausfüllen",
    desc: "Damit ich mich optimal auf Ihr Anliegen vorbereiten kann, bitte ich Sie, vorab ein kurzes Formular auszufüllen. So erhalte ich einen ersten Überblick über Ihre Situation und wir können die Erstberatung effizient nutzen, um gezielt auf die für Sie wichtigen Fragen einzugehen.",
  },
  {
    step: "03",
    title: "Erstberatung",
    desc: "Im vereinbarten Termin besprechen wir ausführlich Ihr Anliegen und klären alle relevanten Fragen. Sie erhalten eine rechtliche Ersteinschätzung Ihrer Situation sowie einen Überblick über die möglichen Handlungsoptionen. Gemeinsam entwickeln wir die nächsten Schritte und eine auf Ihre Ziele abgestimmte Vorgehensweise.",
  },
  {
    step: "04",
    title: "Mandatserteilung",
    desc: "Wenn Sie sich für eine weitere Zusammenarbeit entscheiden, begleite ich Sie mit Klarheit, persönlichem Verständnis und einer verlässlichen Kommunikation durch alle weiteren Schritte Ihres Anliegens.",
  },
];

const faqs = [
  {
    frage: "Was kostet die Erstberatung?",
    antwort:
      "Die Erstberatung erfolgt auf Grundlage einer gesonderten Vergütungsvereinbarung. Über die entstehenden Kosten informiere ich Sie selbstverständlich transparent vor der Terminvereinbarung.",
  },
  {
    frage: "Wie lange dauert die Erstberatung?",
    antwort:
      "Die Dauer der Erstberatung richtet sich nach Ihrem individuellen Anliegen. In der Regel sollten Sie hierfür etwa 60 Minuten einplanen.",
  },
  {
    frage: "Kann die Erstberatung per Video stattfinden?",
    antwort:
      "Ja. Die Erstberatung kann sowohl persönlich in meinen Kanzleiräumen als auch per Videokonferenz über Microsoft Teams stattfinden. So können Sie flexibel entscheiden, welche Form der Beratung am besten zu Ihrer persönlichen Situation passt.",
  },
  {
    frage: "Welche Unterlagen sollte ich mitbringen?",
    antwort:
      "Sofern bereits Unterlagen zu Ihrem Anliegen vorliegen, können Sie diese gerne zum Termin mitbringen oder mir vorab digital übermitteln. Welche Unterlagen im Einzelfall erforderlich oder sinnvoll sind, teile ich Ihnen vor dem Termin mit.",
  },
];

export default function ErstberatungPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20"
        style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }}
      >
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Text */}
          <div>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "#b0b0b0",
                marginBottom: "1rem",
              }}
            >
              Ihr erster Schritt
            </p>
            <h1 style={{ marginBottom: "1.5rem" }}>Erstberatung</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "27px",
                  color: "#3a3a3a",
                  fontWeight: 300,
                }}
              >
                Ich freue mich sehr, dass Sie Interesse an einer Erstberatung in
                meiner Kanzlei haben.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "27px",
                  color: "#3a3a3a",
                  fontWeight: 300,
                }}
              >
                Die Erstberatung bildet die Grundlage für die weitere rechtliche
                Einschätzung Ihres Anliegens. Ziel der Erstberatung ist es, Ihnen
                Orientierung zu geben und eine fundierte Entscheidungsgrundlage
                für die nächsten Schritte zu schaffen.
              </p>
            </div>
          </div>

          {/* Bild */}
          <div className="w-full relative" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/carolin-gerring-keil-03.jpeg"
              alt="Carolin Gerring-Keil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Was Sie erwartet */}
      <section
        className="py-16"
        style={{ background: "#F8F7F7", paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }}
      >
        <div className="max-w-[980px] mx-auto">
          <h2 style={{ marginBottom: "2.5rem" }}>Was Sie erwartet</h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {[
              {
                titel: "Persönliche Analyse",
                text: "In einem persönlichen Gespräch besprechen wir Ihre Situation ausführlich, klären offene Fragen und verschaffen uns gemeinsam einen umfassenden Überblick über Ihr Anliegen.",
              },
              {
                titel: "Ehrliche Einschätzung",
                text: "Sie erhalten eine verständliche und umfassende rechtliche Ersteinschätzung Ihrer Situation. Ich erläutere Ihnen die rechtlichen Möglichkeiten und gebe Ihnen eine realistische Einschätzung der Chancen und Risiken Ihres Anliegens.",
              },
              {
                titel: "Klare Handlungsoptionen",
                text: "Gemeinsam entwickeln wir eine auf Ihre persönliche Situation abgestimmte und zielgerichtete Vorgehensweise – von außergerichtlichen Verhandlungen über alternative Konfliktlösungen bis hin zur gerichtlichen Vertretung.",
              },
              {
                titel: "Vertraulichkeit",
                text: "Selbstverständlich unterliegen sämtliche Gespräche und Informationen der anwaltlichen Schweigepflicht.",
              },
            ].map((item) => (
              <div key={item.titel} style={{ borderTop: "1px solid #e0e0e0", paddingTop: "1.25rem" }}>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    color: "#2a2a2a",
                  }}
                >
                  {item.titel}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "26px", color: "#797979" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section
        className="py-20"
        style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }}
      >
        <div className="max-w-[980px] mx-auto">
          <h2 style={{ marginBottom: "3.5rem" }}>So läuft es ab</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {steps.map((item) => (
              <div
                key={item.step}
                style={{
                  position: "relative",
                  borderTop: "1px solid #e0e0e0",
                  paddingTop: "1.75rem",
                  paddingBottom: "2.5rem",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "-8px",
                    fontSize: "120px",
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.04)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {item.step}
                </span>
                <p style={{ fontSize: "12px", color: "#b0b0b0", letterSpacing: "0.15em", fontWeight: 500, marginBottom: "0.75rem" }}>
                  {item.step}
                </p>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                    color: "#2a2a2a",
                    position: "relative",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "26px", color: "#797979", fontWeight: 300, position: "relative" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16"
        style={{ background: "#F8F7F7", paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }}
      >
        <div className="max-w-[980px] mx-auto">
          <h2 style={{ marginBottom: "2.5rem" }}>Häufige Fragen</h2>
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8"
                style={{
                  borderTop: "1px solid #e0e0e0",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#2a2a2a",
                    lineHeight: "26px",
                  }}
                >
                  {item.frage}
                </p>
                <p style={{ fontSize: "15px", lineHeight: "26px", color: "#797979" }}>
                  {item.antwort}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #e0e0e0" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }}
      >
        <div className="max-w-[980px] mx-auto">
          <div className="py-12 px-10" style={{ background: "#F8F7F7" }}>
            <p className="mb-6" style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "560px" }}>
              Sie möchten einen Termin für die Erstberatung vereinbaren oder
              haben vorab Fragen?
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
      </section>
    </>
  );
}
