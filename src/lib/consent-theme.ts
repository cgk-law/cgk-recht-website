import type { Theme } from "@c15t/nextjs";

export const consentTheme = {
  colors: {
    primary: "#2C5F3A",
    primaryHover: "#234a2d",
    surface: "#ffffff",
    surfaceHover: "#F8F7F7",
    border: "#797979",
    borderHover: "#5e5e5e",
    text: "#3a3a3a",
    textMuted: "#797979",
    switchTrackActive: "#2C5F3A",
  },
  typography: {
    fontFamily: "var(--font-montserrat), sans-serif",
  },
  slots: {
    consentBannerTitle: "uppercase tracking-[0.08em]",
    consentDialogTitle: "uppercase tracking-[0.08em]",
  },
} satisfies Theme;
