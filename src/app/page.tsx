import Image from "next/image";
import Link from "next/link";

const quickLinks = [
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

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full flex items-end"
        style={{ minHeight: "85vh", paddingLeft: "124px", paddingRight: "124px" }}
      >
        <Image
          src="/images/cgk-kanzlei-office.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.78)" }} />

        <div
          className="relative z-10 pb-20 max-w-[980px] mx-auto w-full"
        >
          <h1
            className="mb-1"
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 300,
              textTransform: "none",
              letterSpacing: "0.04em",
              color: "#1a1a1a",
              lineHeight: 1.4,
            }}
          >
            Erbrecht · Familienrecht
            <br />
            <span style={{ fontWeight: 600 }}>Carolin Gerring-Keil</span>
          </h1>
          <p
            className="mb-6"
            style={{
              color: "rgba(0,0,0,0.45)",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Rechtsanwältin • Kanzleiinhaberin
          </p>
          <p
            style={{
              color: "rgba(0,0,0,0.6)",
              fontSize: "15px",
              lineHeight: "26px",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            Individuelle Beratung im Erb- und Familienrecht.
            Mit klarer Struktur, Empathie und einem sicheren Blick für das Wesentliche.
          </p>
          <Link
            href="/kontakt"
            style={{
              display: "inline-block",
              border: "1px solid rgba(0,0,0,0.4)",
              borderRadius: "5px",
              padding: "8px 20px",
              fontSize: "14px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.65)",
              transition: "all 0.2s",
            }}
            className="hover:border-black hover:text-black"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* Einleitung */}
      <section
        className="py-20"
        style={{ paddingLeft: "124px", paddingRight: "124px" }}
      >
        <div className="max-w-[980px] mx-auto grid grid-cols-2 gap-20">
          {/* Linke Spalte */}
          <div>
            {[
              { text: "Strukturiert.", fontWeight: 300, fontStyle: "normal" },
              { text: "Empathisch.", fontWeight: 600, fontStyle: "normal" },
              { text: "Verlässlich.", fontWeight: 300, fontStyle: "italic" },
            ].map(({ text, fontWeight, fontStyle }) => (
              <p
                key={text}
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight,
                  fontStyle,
                  letterSpacing: "0.02em",
                  color: "#1a1a1a",
                  lineHeight: 1.35,
                }}
              >
                {text}
              </p>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
              {[
                "Erbrecht ist Vertrauenssache. Ich begleite Sie bei der Gestaltung, Sicherung und Durchsetzung Ihrer erbrechtlichen Anliegen – vorausschauend, persönlich und mit Blick auf Ihre individuelle Lebenssituation.",
                "Ob Testamentsgestaltung, Erbvertrag, Pflichtteilsrecht oder Fragen rund um die Erbengemeinschaft – ich berate Sie umfassend und entwickle gemeinsam mit Ihnen rechtssichere und tragfähige Lösungen für Ihre persönliche und familiäre Situation.",
                "Auch im Bereich der rechtlichen Vorsorge, insbesondere bei Vorsorgevollmachten und Patientenverfügungen, unterstütze ich Sie mit Klarheit und Weitblick.",
                "Familienrechtliche Konflikte sind häufig mit persönlichen und emotionalen Belastungen verbunden. Ich unterstütze Sie dabei, auch in herausfordernden Situationen klare, interessengerechte und nachhaltige Lösungen zu finden.",
                "Ob Ehevertrag, Trennung oder Scheidung – ich begleite Sie mit Klarheit, Struktur und persönlichem Verständnis für Ihre individuelle Situation.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{ fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Rechte Spalte */}
          <div
            className="w-full relative"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/images/carolin-gerring-keil-02.jpeg"
              alt="Carolin Gerring-Keil"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leistungen Überblick */}
      <section
        className="py-20"
        style={{ paddingLeft: "124px", paddingRight: "124px" }}
      >
        <div className="max-w-[980px] mx-auto">
          <h2>Meine Leistungen</h2>
          <p style={{ maxWidth: "540px", color: "#797979", marginBottom: "3.5rem" }}>
            Ich berate Sie individuell und entwickle gemeinsam mit Ihnen eine klare und zielgerichtete Vorgehensweise – von außergerichtlichen Verhandlungen über alternative Konfliktlösungen bis hin zur gerichtlichen Vertretung.
          </p>
          {quickLinks.map((item, i) => (
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
          <div style={{ borderTop: "1px solid #e0e0e0" }} />
        </div>
      </section>

      {/* Persönlich & Digital */}
      <section
        className="py-16"
        style={{ background: "#F8F7F7", paddingLeft: "124px", paddingRight: "124px" }}
      >
        <div className="max-w-[980px] mx-auto">
          <h2 style={{ marginBottom: "1.5rem" }}>Persönlich und digital</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "640px" }}>
            <p style={{ fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
              Ich arbeite in einer vollständig digitalisierten Kanzlei und bin bundesweit für Sie tätig. Beratungstermine können flexibel digital oder persönlich in meinen Kanzleiräumen stattfinden. Hausbesuche sind nach individueller Vereinbarung ebenfalls möglich.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
              Bitte beachten Sie, dass Beratungen ausschließlich nach Terminvereinbarung erfolgen.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "27px", color: "#3a3a3a", fontWeight: 300 }}>
              Selbstverständlich unterliegen sämtliche Gespräche der anwaltlichen Schweigepflicht.
            </p>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section
        className="py-20"
        style={{ paddingLeft: "124px", paddingRight: "124px" }}
      >
        <div className="max-w-[980px] mx-auto">
          <h2 style={{ marginBottom: "3.5rem" }}>So arbeiten wir zusammen</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              { step: "01", title: "Erstkontakt", desc: "Sie erreichen die Kanzlei telefonisch, per E-Mail oder über das Kontaktformular. In einem ersten unverbindlichen Austausch besprechen wir Ihr Anliegen und vereinbaren einen zeitnahen Termin für die Erstberatung." },
              { step: "02", title: "Analysebogen ausfüllen", desc: "Damit ich mich optimal auf Ihr Anliegen vorbereiten kann, bitte ich Sie, vorab ein kurzes Formular auszufüllen. So erhalte ich einen ersten Überblick über Ihre Situation und wir können die Erstberatung effizient nutzen, um gezielt auf die für Sie wichtigen Fragen einzugehen." },
              { step: "03", title: "Erstberatung", desc: "Im vereinbarten Termin besprechen wir ausführlich Ihr Anliegen und klären alle relevanten Fragen. Sie erhalten eine rechtliche Ersteinschätzung Ihrer Situation sowie einen Überblick über die möglichen Handlungsoptionen. Gemeinsam entwickeln wir die nächsten Schritte und eine auf Ihre Ziele abgestimmte Vorgehensweise." },
              { step: "04", title: "Mandatserteilung", desc: "Wenn Sie sich für eine weitere Zusammenarbeit entscheiden, begleite ich Sie mit Klarheit, persönlichem Verständnis und einer verlässlichen Kommunikation durch alle weiteren Schritte Ihres Anliegens." },
            ].map((item) => (
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
                <h2 style={{ marginBottom: "0.75rem", position: "relative" }}>{item.title}</h2>
                <p style={{ fontSize: "15px", lineHeight: "26px", color: "#797979", fontWeight: 300, position: "relative" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ paddingLeft: "124px", paddingRight: "124px" }}
      >
        <div className="max-w-[980px] mx-auto">
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
      </section>
    </>
  );
}
