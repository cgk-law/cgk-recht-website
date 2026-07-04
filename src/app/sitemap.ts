import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Datum unten nur anpassen, wenn sich der Inhalt der jeweiligen Seite tatsächlich ändert –
// `new Date()` würde bei jedem Build "heute" liefern und entwertet das Crawl-Signal für Google.
const LAST_MODIFIED = {
  home: "2026-07-04",
  uberMich: "2026-07-04",
  leistungen: "2026-07-04",
  erbrecht: "2026-07-04",
  familienrecht: "2026-07-04",
  vorsorge: "2026-07-04",
  erstberatung: "2026-07-04",
  kosten: "2026-07-04",
  kontakt: "2026-07-04",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  return [
    { url: base, lastModified: LAST_MODIFIED.home, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ueber-mich`, lastModified: LAST_MODIFIED.uberMich, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leistungen`, lastModified: LAST_MODIFIED.leistungen, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/erbrecht`, lastModified: LAST_MODIFIED.erbrecht, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/familienrecht`, lastModified: LAST_MODIFIED.familienrecht, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/vorsorge`, lastModified: LAST_MODIFIED.vorsorge, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/erstberatung`, lastModified: LAST_MODIFIED.erstberatung, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kosten`, lastModified: LAST_MODIFIED.kosten, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: LAST_MODIFIED.kontakt, changeFrequency: "monthly", priority: 0.8 },
  ];
}
