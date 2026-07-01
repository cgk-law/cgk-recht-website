import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – CGK Rechtsanwaltskanzlei",
};

const divider = <div style={{ borderTop: "1px solid #e0e0e0", margin: "2.5rem 0" }} />;

const sectionTitle = (text: string) => (
  <h2 style={{ marginBottom: "1.25rem" }}>{text}</h2>
);

const row = (label: string, value: React.ReactNode) => (
  <div
    key={label}
    style={{
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: "1rem",
      marginBottom: "0.35rem",
    }}
  >
    <span style={{ fontSize: "15px", color: "#b0b0b0", fontWeight: 300 }}>{label}</span>
    <span style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300 }}>{value}</span>
  </div>
);

export default function ImpressumPage() {
  return (
    <div style={{ paddingLeft: "124px", paddingRight: "124px" }} className="py-20">
      <div style={{ maxWidth: "780px" }}>
        <h1>Impressum</h1>

        {/* Kontakt */}
        <div style={{ marginBottom: "0.35rem" }}>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 400, marginBottom: "0.1rem" }}>CGK Rechtsanwaltskanzlei</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Rechtsanwältin Carolin Gerring-Keil</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Mörikestraße 5</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "1rem" }}>41541 Dormagen</p>
        </div>
        {row("Telefon", <a href="tel:+4921336309228" className="hover:text-[#2C5F3A] transition-colors">02133 / 6309228</a>)}
        {row("Sprechzeiten", "Mo – Do 9:00 – 17:00 Uhr, Fr 9:00 – 13:00 Uhr")}
        {row("E-Mail", <a href="mailto:kanzlei@cgk-recht.de" className="hover:text-[#2C5F3A] transition-colors">kanzlei@cgk-recht.de</a>)}

        {divider}

        {/* USt */}
        {sectionTitle("Umsatzsteuer-ID")}
        {row("Umsatzsteuer-ID-Nr.", <span style={{ color: "#b0b0b0" }}>folgt</span>)}

        {divider}

        {/* Inhaltlich verantwortlich */}
        {sectionTitle("Inhaltlich verantwortlich")}
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px" }}>
          Rechtsanwältin Carolin Gerring-Keil, Adresse siehe oben.
        </p>

        {divider}

        {/* Berufsrechtliche Angaben */}
        {sectionTitle("Berufsrechtliche Angaben")}
        {row("Berufsbezeichnung", "Rechtsanwältin, verliehen in Deutschland")}

        {divider}

        {/* Zuständige Kammer */}
        {sectionTitle("Zuständige Kammer / Aufsichtsbehörde")}
        <div style={{ marginBottom: "0.35rem" }}>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Rechtsanwaltskammer Düsseldorf</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Freiligrathstraße 25</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "1rem" }}>40479 Düsseldorf</p>
        </div>
        {row("E-Mail", <a href="mailto:info@rak-dus.de" className="hover:text-[#2C5F3A] transition-colors">info@rak-dus.de</a>)}
        {row("Telefon", <a href="tel:+492114950200" className="hover:text-[#2C5F3A] transition-colors">0211 495020</a>)}

        {divider}

        {/* Berufshaftpflicht */}
        {sectionTitle("Berufshaftpflichtversicherung")}
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px", marginBottom: "1.25rem" }}>
          Eine Berufshaftpflichtversicherung (sog. Vermögensschadenversicherung) besteht bei
        </p>
        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>ERGO Group AG</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Victoriaplatz 2</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300 }}>40198 Düsseldorf</p>
        </div>
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px" }}>
          Rechtsanwältinnen und Rechtsanwälte sind aufgrund der Bundesrechtsanwaltsordnung (BRAO) verpflichtet, eine Berufshaftpflichtversicherung mit einer Mindestversicherungssumme von 250.000 EUR zu unterhalten. Die Einzelheiten ergeben sich aus § 51 BRAO. Der räumliche Geltungsbereich umfasst das EU-Gebiet.
        </p>

        {divider}

        {/* Berufsrechtliche Regelungen */}
        {sectionTitle("Berufsrechtliche Regelungen")}
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px", marginBottom: "1rem" }}>
          Bundesrechtsanwaltsordnung (BRAO), Berufsordnung für Rechtsanwälte (BORA), Rechtsanwaltsvergütungsgesetz (RVG), Fachanwaltsordnung (FAO), Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE).
        </p>
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px" }}>
          Die berufsrechtlichen Regelungen können über die Homepage der Bundesrechtsanwaltskammer (www.brak.de) in der Rubrik „Berufsrecht&rdquo; eingesehen werden.
        </p>

        {divider}

        {/* Außergerichtliche Streitschlichtung */}
        {sectionTitle("Außergerichtliche Streitschlichtung")}
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px", marginBottom: "1.25rem" }}>
          Für vermögensrechtliche Streitigkeiten aus dem Mandatsverhältnis bin ich zur Teilnahme an einem Streitbeilegungsverfahren bei der Schlichtungsstelle der Rechtsanwaltschaft grundsätzlich bereit, jedoch nicht verpflichtet.
        </p>
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Schlichtungsstelle der Rechtsanwaltschaft</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>Rauchstraße 26</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>10787 Berlin</p>
          <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "0.1rem" }}>www.schlichtungsstelle-der-rechtsanwaltschaft.de</p>
          <a href="mailto:schlichtungsstelle@s-d-r.org" style={{ fontSize: "15px", fontWeight: 300 }} className="hover:text-[#2C5F3A] transition-colors text-[#3a3a3a]">
            schlichtungsstelle@s-d-r.org
          </a>
        </div>

        {divider}

        {/* Urheberrecht */}
        {sectionTitle("Urheberrecht")}
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px" }}>
          Alle weiteren Inhalte dieser Seiten sind urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung.
        </p>

        {divider}

        {/* Allgemeine Informationen */}
        {sectionTitle("Allgemeine Informationen")}
        <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, lineHeight: "27px" }}>
          Die auf dieser Internetseite veröffentlichten Inhalte dienen ausschließlich allgemeinen Informationszwecken über die Dienstleistungen von Frau Rechtsanwältin Gerring-Keil. Sie ersetzen keine Rechtsberatung und sind ausdrücklich nicht dazu bestimmt, ohne eine individuelle Prüfung im Einzelfall von Dritten übernommen oder in sonstiger Weise genutzt zu werden. Eine Haftung für Schäden, die im Zusammenhang mit einer nicht abgestimmten Verwendung der Inhalte entstehen, ist ausgeschlossen.
        </p>
      </div>
    </div>
  );
}
