"use client";

import type { ReactNode } from "react";
import { ConsentBanner, ConsentDialog, ConsentManagerProvider } from "@c15t/nextjs";
import { gtag } from "@c15t/scripts/google-tag";
import { consentTheme } from "@/lib/consent-theme";
import { de } from "@/lib/consent-translations";

export type ConsentManagerProps = {
  children: ReactNode;
};

// GA4/Google Ads sind erst aktiv, wenn NEXT_PUBLIC_GA_ID bzw. NEXT_PUBLIC_GOOGLE_ADS_ID
// gesetzt sind (siehe .env.example) – ohne diese Werte ist scripts ein leeres Array.
const scripts = [
  ...(process.env.NEXT_PUBLIC_GA_ID
    ? [gtag({ id: process.env.NEXT_PUBLIC_GA_ID, category: "measurement" as const })]
    : []),
  ...(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
    ? [gtag({ id: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID, category: "marketing" as const })]
    : []),
];

export function ConsentManager({ children }: ConsentManagerProps) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement", "marketing"],
        overrides: { country: "DE" },
        i18n: { locale: "de", detectBrowserLanguage: false, messages: { de } },
        theme: consentTheme,
        scripts,
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      {children}
    </ConsentManagerProvider>
  );
}
