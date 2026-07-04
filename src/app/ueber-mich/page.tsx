import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über mich – CGK Rechtsanwaltskanzlei Dormagen",
  description:
    "Carolin Gerring-Keil, Rechtsanwältin für Erbrecht und Familienrecht in Dormagen. Persönliche Beratung mit juristischer Präzision und Empathie.",
  alternates: { canonical: "/ueber-mich" },
  openGraph: {
    title: "Über mich – CGK Rechtsanwaltskanzlei Dormagen",
    description:
      "Carolin Gerring-Keil, Rechtsanwältin für Erbrecht und Familienrecht in Dormagen. Persönliche Beratung mit juristischer Präzision und Empathie.",
    url: "/ueber-mich",
    siteName: "CGK Rechtsanwaltskanzlei",
    locale: "de_DE",
    type: "website",
  },
};

const werdegang = [
  {
    label: "Ausbildung",
    items: [
      "Studium der Rechtswissenschaften an der Heinrich-Heine-Universität Düsseldorf",
      "Juristischer Vorbereitungsdienst",
      "Zulassung zur Rechtsanwaltschaft (2022)",
    ],
  },
  {
    label: "Zusätzliche Qualifikationen",
    items: [
      "Erfolgreicher Abschluss des theoretischen Fachanwaltslehrgangs im Erbrecht",
      "Erfolgreicher Abschluss des Testamentsvollstreckerlehrgangs (DVEV)",
      "Derzeit Teilnahme am Fachanwaltslehrgang Familienrecht",
    ],
  },
  {
    label: "Bisherige Tätigkeiten",
    items: [
      "Rechtsanwältin in zwei Kanzleiboutiquen mit dem Schwerpunkt im Erb- und Familienrecht",
    ],
  },
];

const mitgliedschaften = [
  "Rotary Club Dormagen",
];

const privat = [
  "Jahrgang 1990",
  "Geboren und aufgewachsen in Neuss",
  "Verheiratet",
  "Ehemalige Leistungssportlerin Feldhockey",
];

const buerozeitenRows = [
  { tag: "Montag", zeit: "9:00 – 17:00 Uhr" },
  { tag: "Dienstag", zeit: "9:00 – 17:00 Uhr" },
  { tag: "Mittwoch", zeit: "9:00 – 17:00 Uhr" },
  { tag: "Donnerstag", zeit: "9:00 – 17:00 Uhr" },
  { tag: "Freitag", zeit: "9:00 – 13:00 Uhr" },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carolin Gerring-Keil",
  jobTitle: "Rechtsanwältin",
  worksFor: { "@type": "LegalService", name: "CGK Rechtsanwaltskanzlei" },
  url: `${SITE_URL}/ueber-mich`,
  image: `${SITE_URL}/images/carolin-gerring-keil-01.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mörikestraße 5",
    addressLocality: "Dormagen",
    postalCode: "41541",
    addressCountry: "DE",
  },
  alumniOf: "Heinrich-Heine-Universität Düsseldorf",
};

export default function UeberMichPage() {
  return (
    <div style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }} className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="max-w-[980px] mx-auto">

        {/* Intro: Bild links, Text rechts */}
        <h1 className="mb-12">Über mich</h1>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Foto */}
          <div
            className="w-full relative"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/images/carolin-gerring-keil-01.jpeg"
              alt="Carolin Gerring-Keil"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <p
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 600,
                color: "#1a1a1a",
                letterSpacing: "0.01em",
                marginBottom: "0.25rem",
              }}
            >
              Carolin Gerring-Keil
            </p>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.4)",
                fontWeight: 500,
                marginBottom: "2rem",
              }}
            >
              Rechtsanwältin • Kanzleiinhaberin
            </p>

            {[
              "Mein Name ist Carolin Gerring-Keil. Als Rechtsanwältin setze ich mich leidenschaftlich dafür ein, Mandantinnen und Mandanten in allen Angelegenheiten des Erb- und Familienrechts zur Seite zu stehen.",
              "Beide Rechtsgebiete betreffen häufig nicht nur rechtliche Fragen, sondern auch persönliche Lebenssituationen, familiäre Veränderungen und emotionale Herausforderungen.",
              "Ich unterstütze meine Mandantinnen und Mandanten dabei, in komplexen und belastenden Situationen Orientierung zu gewinnen und klare, verlässliche Lösungen zu entwickeln. Dabei verbinde ich juristische Präzision mit persönlichem Verständnis, Empathie und einer strukturierten und lösungsorientierten Beratung.",
              "Mein Ziel ist es, Interessen konsequent zu vertreten und gleichzeitig tragfähige Regelungen zu schaffen, die auch langfristig Bestand haben und sich sinnvoll in die persönliche Lebenssituation einfügen. Dabei haben Sie von Beginn an eine feste Ansprechpartnerin an Ihrer Seite, die Sie verlässlich und persönlich durch alle Phasen Ihres Anliegens begleitet.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "15px",
                  lineHeight: "27px",
                  color: "#3a3a3a",
                  fontWeight: 300,
                  marginBottom: "1.25rem",
                }}
              >
                {text}
              </p>
            ))}

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
                marginTop: "0.5rem",
              }}
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>

        {/* Beruflicher Werdegang */}
        <div style={{ borderTop: "1px solid #e0e0e0", marginTop: "5rem", paddingTop: "4rem" }}>
          <h2 style={{ marginBottom: "3rem" }}>Beruflicher Werdegang</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {werdegang.map((block) => (
              <div
                key={block.label}
                className="grid md:grid-cols-[220px_1fr]"
                style={{ borderTop: "1px solid #e0e0e0", paddingTop: "1.75rem", paddingBottom: "1.75rem", gap: "2rem" }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: "#b0b0b0",
                    paddingTop: "2px",
                  }}
                >
                  {block.label}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {block.items.map((item) => (
                    <li key={item} style={{ fontSize: "15px", lineHeight: "26px", color: "#3a3a3a", fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #e0e0e0" }} />
          </div>
        </div>

        {/* Mitgliedschaften & Privat */}
        <div
          className="grid md:grid-cols-2 gap-16"
          style={{ borderTop: "1px solid #e0e0e0", marginTop: "4rem", paddingTop: "4rem" }}
        >
          <div>
            <h2 style={{ marginBottom: "1.75rem" }}>Mitgliedschaften</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {mitgliedschaften.map((item) => (
                <li key={item} style={{ fontSize: "15px", lineHeight: "26px", color: "#3a3a3a", fontWeight: 300, display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#b0b0b0", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ marginBottom: "1.75rem" }}>Privat</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {privat.map((item) => (
                <li key={item} style={{ fontSize: "15px", lineHeight: "26px", color: "#3a3a3a", fontWeight: 300, display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#b0b0b0", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kontakt & Anfahrt */}
        <div
          className="grid md:grid-cols-2 gap-16"
          style={{ borderTop: "1px solid #e0e0e0", marginTop: "4rem", paddingTop: "4rem" }}
        >
          <div>
            <h2 style={{ marginBottom: "1.75rem" }}>Kontakt & Anfahrt</h2>
            <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "0.1rem" }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.25rem" }}>
                CGK Rechtsanwaltskanzlei
              </p>
              <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300 }}>
                Rechtsanwältin und Kanzleiinhaberin Carolin Gerring-Keil
              </p>
              <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300 }}>Mörikestraße 5</p>
              <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, marginBottom: "1.25rem" }}>
                41541 Dormagen
              </p>
              {[
                { label: "Telefon", value: "02133 / 6309228", href: "tel:+4921336309228" },
                { label: "Mobil", value: "0151 / 44396111", href: "tel:+4915144396111" },
              ].map(({ label, value, href }) => (
                <p key={label} style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, display: "flex", gap: "1rem" }}>
                  <span style={{ width: "64px", flexShrink: 0, color: "#b0b0b0", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, paddingTop: "2px" }}>
                    {label}
                  </span>
                  <a href={href} className="hover:text-[#2C5F3A] transition-colors">{value}</a>
                </p>
              ))}
              <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, display: "flex", gap: "1rem", marginTop: "0.1rem" }}>
                <span style={{ width: "64px", flexShrink: 0, color: "#b0b0b0", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, paddingTop: "2px" }}>
                  E-Mail
                </span>
                <a href="mailto:kanzlei@cgk-recht.de" className="hover:text-[#2C5F3A] transition-colors">
                  kanzlei@cgk-recht.de
                </a>
              </p>
              <p style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300, display: "flex", gap: "1rem", marginTop: "0.1rem" }}>
                <span style={{ width: "64px", flexShrink: 0, color: "#b0b0b0", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, paddingTop: "2px" }}>
                  Web
                </span>
                <span>www.cgk-recht.de</span>
              </p>
            </address>
          </div>

          <div>
            <h2 style={{ marginBottom: "1.75rem" }}>Bürozeiten</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {buerozeitenRows.map(({ tag, zeit }) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid #e0e0e0",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300 }}>{tag}</span>
                  <span style={{ fontSize: "15px", color: "#3a3a3a", fontWeight: 300 }}>{zeit}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e0e0e0" }} />
            </div>
            <p style={{ fontSize: "13px", color: "#b0b0b0", marginTop: "1rem", lineHeight: "22px" }}>
              Termine außerhalb dieser Zeiten sind nach individueller Absprache möglich.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
