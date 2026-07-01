"use client";

import type { ReactNode } from "react";
import { ConsentBanner, ConsentDialog, ConsentManagerProvider } from "@c15t/nextjs";
import { consentTheme } from "@/lib/consent-theme";
import { de } from "@/lib/consent-translations";

export type ConsentManagerProps = {
  children: ReactNode;
};

export function ConsentManager({ children }: ConsentManagerProps) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement", "marketing"],
        overrides: { country: "DE" },
        i18n: { locale: "de", detectBrowserLanguage: false, messages: { de } },
        theme: consentTheme,
        // Künftige Anbindung von Google Analytics o.ä. (noch nicht aktiv):
        // scripts: [gtag({ id: process.env.NEXT_PUBLIC_GA_ID!, category: "measurement" })],
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      {children}
    </ConsentManagerProvider>
  );
}
