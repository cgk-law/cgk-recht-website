import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cgk-recht.de";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ueber-mich`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leistungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/erbrecht`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/familienrecht`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/vorsorge`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/erstberatung`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kosten`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
