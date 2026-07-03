"use client";

import { useState, type FormEvent } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid #797979",
  background: "transparent",
  padding: "8px 0",
  fontSize: "15px",
  color: "#797979",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontWeight: 500,
  color: "#80878D",
  marginBottom: "4px",
};

const FORMSPARK_FORM_ID = "b2ORmERu0";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    betreff: "",
    nachricht: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch(
        `https://submit-form.com/${FORMSPARK_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) throw new Error("Formspark request failed");

      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ paddingLeft: "var(--page-x)", paddingRight: "var(--page-x)" }} className="py-20">
      <div className="max-w-[980px] mx-auto">
        <h1 className="mb-12">Kontakt</h1>

        {/* Ablauf – komprimiert */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { step: "01", title: "Erstkontakt" },
            { step: "02", title: "Analysebogen" },
            { step: "03", title: "Erstberatung" },
            { step: "04", title: "Mandatserteilung" },
          ].map((item) => (
            <div key={item.step} style={{ borderTop: "1px solid #e0e0e0", paddingTop: "1rem" }}>
              <p style={{ fontSize: "12px", color: "#b0b0b0", letterSpacing: "0.15em", fontWeight: 500, marginBottom: "0.4rem" }}>
                {item.step}
              </p>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#2a2a2a" }}>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Kontaktformular */}
        <div className="mb-20 py-12 px-10" style={{ background: "#F8F7F7" }}>
          <h2 className="mb-8">Nachricht schreiben</h2>

          {sent ? (
            <div
              className="py-10"
              style={{
                borderTop: "1px solid #2C5F3A",
                paddingTop: "2rem",
              }}
            >
              <p
                style={{
                  color: "#2C5F3A",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "14px",
                  marginBottom: "0.75rem",
                }}
              >
                Nachricht gesendet
              </p>
              <p>
                Vielen Dank für Ihre Nachricht. Ich melde mich so bald wie
                möglich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vorname" style={labelStyle}>
                    Vorname *
                  </label>
                  <input
                    id="vorname"
                    name="vorname"
                    type="text"
                    required
                    value={form.vorname}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Ihr Vorname"
                  />
                </div>
                <div>
                  <label htmlFor="nachname" style={labelStyle}>
                    Nachname *
                  </label>
                  <input
                    id="nachname"
                    name="nachname"
                    type="text"
                    required
                    value={form.nachname}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Ihr Nachname"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" style={labelStyle}>
                    Telefon *
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    required
                    value={form.telefon}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+49 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="betreff" style={labelStyle}>
                  Betreff *
                </label>
                <select
                  id="betreff"
                  name="betreff"
                  required
                  value={form.betreff}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Bitte wählen …</option>
                  <option value="erbrecht">Erbrecht</option>
                  <option value="familienrecht">Familienrecht</option>
                  <option value="vorsorge">Vorsorge</option>
                  <option value="anderes">Anderes</option>
                </select>
              </div>

              <div>
                <label htmlFor="nachricht" style={labelStyle}>
                  Nachricht *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  required
                  rows={5}
                  value={form.nachricht}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    borderBottom: "none",
                    border: "1px solid #797979",
                    padding: "10px 12px",
                  }}
                  placeholder="Schildern Sie Ihr Anliegen …"
                />
              </div>

              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#80878D",
                    lineHeight: "20px",
                    marginBottom: "1.5rem",
                  }}
                >
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und
                  nicht an Dritte weitergegeben.
                </p>
                {error && (
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#b03030",
                      marginBottom: "1rem",
                    }}
                  >
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuchen
                    Sie es erneut oder kontaktieren Sie mich telefonisch.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="hover:text-[#2C5F3A] transition-colors duration-200"
                  style={{
                    border: "1px solid #797979",
                    borderRadius: "5px",
                    padding: "7px 20px",
                    fontSize: "14px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#797979",
                    background: "transparent",
                    cursor: submitting ? "default" : "pointer",
                    opacity: submitting ? 0.6 : 1,
                    fontFamily: "inherit",
                  }}
                >
                  {submitting ? "Wird gesendet …" : "Nachricht senden"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Kontaktdaten */}
        <div style={{ maxWidth: "640px" }}>
          <h2 className="mb-6">Kanzlei</h2>
          <address style={{ fontStyle: "normal" }}>
            <p className="mb-1">
              <strong>CGK Rechtsanwaltskanzlei</strong>
            </p>
            <p className="mb-1">
              Carolin Gerring-Keil · Rechtsanwältin und Kanzleiinhaberin
            </p>
            <p className="mb-1">Mörikestraße 5</p>
            <p className="mb-8">41541 Dormagen</p>

            <p className="mb-1">
              <a
                href="tel:+4921336309228"
                className="hover:text-[#2C5F3A] transition-colors"
              >
                Telefon: 02133 / 6309228
              </a>
            </p>
            <p className="mb-1">
              <a
                href="tel:+4915144396111"
                className="hover:text-[#2C5F3A] transition-colors"
              >
                Mobil: 0151 / 44396111
              </a>
            </p>
            <p className="mb-1">
              <a
                href="mailto:kanzlei@cgk-recht.de"
                className="hover:text-[#2C5F3A] transition-colors break-all"
              >
                kanzlei@cgk-recht.de
              </a>
            </p>
            <p className="mb-1">
              <a
                href="https://www.cgk-recht.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2C5F3A] transition-colors break-all"
              >
                www.cgk-recht.de
              </a>
            </p>
            <p className="mb-12">
              <a
                href="https://g.page/r/CfosMc00-Pd3EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2C5F3A] transition-colors"
              >
                Google-Bewertung abgeben
              </a>
            </p>
          </address>

          <h2 className="mb-5">Bürozeiten</h2>
          <ul className="mb-4">
            <li className="mb-1">Montag: 9:00 – 17:00 Uhr</li>
            <li className="mb-1">Dienstag: 9:00 – 17:00 Uhr</li>
            <li className="mb-1">Mittwoch: 9:00 – 17:00 Uhr</li>
            <li className="mb-1">Donnerstag: 9:00 – 17:00 Uhr</li>
            <li className="mb-1">Freitag: 9:00 – 13:00 Uhr</li>
          </ul>
          <p className="mb-12">
            Termine außerhalb dieser Zeiten sind nach individueller
            Absprache möglich.
          </p>

          <h2 className="mb-5">Persönlich und digital</h2>
          <p className="mb-4">
            Ich arbeite in einer vollständig digitalisierten Kanzlei und bin
            bundesweit für Sie tätig. Beratungstermine können flexibel
            digital oder persönlich in meinen Kanzleiräumen stattfinden.
            Hausbesuche sind nach individueller Vereinbarung ebenfalls
            möglich.
          </p>
          <p className="mb-4">
            Bitte beachten Sie, dass Beratungen ausschließlich nach
            Terminvereinbarung erfolgen.
          </p>
          <p>
            Selbstverständlich unterliegen sämtliche Gespräche der
            anwaltlichen Schweigepflicht.
          </p>
        </div>
      </div>
    </div>
  );
}
