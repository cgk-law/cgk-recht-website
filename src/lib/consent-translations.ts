import type { Translations } from "@c15t/nextjs";

export const de: Partial<Translations> = {
  common: {
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    customize: "Anpassen",
    save: "Einstellungen speichern",
    close: "Schließen",
    securedBy: "Gesichert von",
  },
  cookieBanner: {
    title: "Wir respektieren Ihre Privatsphäre",
    description:
      "Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern und die Nutzung der Seite zu analysieren.",
  },
  consentManagerDialog: {
    title: "Datenschutz-Einstellungen",
    description:
      "Passen Sie hier Ihre Datenschutz-Einstellungen an. Sie können wählen, welche Arten von Cookies und Tracking-Technologien Sie zulassen.",
  },
  consentTypes: {
    necessary: {
      title: "Notwendig",
      description:
        "Diese Cookies sind für die grundlegende Funktion der Website unerlässlich und können nicht deaktiviert werden.",
    },
    marketing: {
      title: "Marketing",
      description:
        "Diese Cookies werden verwendet, um relevante Werbung anzuzeigen und deren Wirksamkeit zu messen.",
    },
    measurement: {
      title: "Statistik",
      description:
        "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, und die Leistung zu verbessern.",
    },
  },
};
