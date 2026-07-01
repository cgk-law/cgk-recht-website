# CLAUDE.md

## Project Overview

Marketing website for "CGK Rechtsanwaltskanzlei" — Carolin Gerring-Keil, Rechtsanwältin in Dormagen (Erbrecht & Familienrecht). Next.js frontend, TypeScript, Tailwind CSS, with a German-language cookie consent banner (c15t).

**Production domain:** `https://www.cgk-recht.de`
**GitHub repo:** `https://github.com/cgk-law/cgk-recht-website.git` (owned by the client, you are a collaborator)

## Deployment

Vercel Hobby Plan — GitHub Actions handles deployment automatically. **Do NOT manually trigger Vercel or use the deploy hook.**

Push workflow (the only thing needed):
```bash
git add -A
git commit -m "Beschreibung"
git push origin main
```

Every push to `main` triggers `.github/workflows/deploy.yml` which deploys to Vercel via CLI token. This bypasses the Hobby Plan contributor restriction (direct GitHub integration is disconnected).

**Do not reconnect the GitHub↔Vercel integration** — it will block deployments again since Torben is not the Vercel project owner.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Cookie consent:** `@c15t/nextjs` (offline mode, no backend)
- **Contact form:** Formspark (`https://submit-form.com/b2ORmERu0`) — account owned by the client
- **Fonts:** Montserrat via `next/font/google` — downloaded at build time, served locally. No runtime calls to Google servers. DSGVO-konform, nothing to declare in Datenschutzerklärung.
- **Installed but not yet used:** `framer-motion` (no animations implemented yet); shadcn/ui is **not** set up (no `components.json`, no `components/ui/`) — don't assume it's available

---

## Dev Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

Always run `npm run typecheck && npm run lint && npm run build` before finishing a feature.

---

## Project Structure

```
public/
├── robots.txt               # Allows all, references /sitemap.xml
└── images/
    ├── cgk-kanzlei-office.jpeg      # Hero/header background image
    ├── carolin-gerring-keil-01.jpeg # Portrait for Über-mich page
    ├── carolin-gerring-keil-02.jpeg # Portrait for Startseite (Einleitung section)
    ├── cgk-logo-dark-green.png
    └── zons-header.jpg

src/
├── app/
│   ├── layout.tsx          # Root layout — ConsentManager, LegalService JSON-LD schema, OG tags, metadataBase
│   ├── sitemap.ts           # Next.js MetadataRoute sitemap → /sitemap.xml
│   ├── page.tsx             # Startseite (home)
│   ├── ueber-mich/          # Rechtsanwältin / about
│   ├── leistungen/          # Leistungen overview + erbrecht/familienrecht/vorsorge subpages
│   ├── erstberatung/        # Erstberatung explainer + Wie ich Sie unterstütze + FAQ
│   ├── kontakt/
│   │   ├── layout.tsx       # Metadata only — needed because page.tsx is "use client"
│   │   └── page.tsx         # "use client" — contact form (Formspark), 4-step process
│   ├── kosten/              # Pricing/cost transparency
│   ├── impressum/           # Legal notice
│   └── datenschutz/         # Full eRecht24-based privacy policy (All-Inkl, Formspark, c15t cookies)
├── components/
│   ├── Navigation.tsx       # "use client" — header nav, mobile hamburger menu
│   ├── Footer.tsx           # Impressum / Datenschutz / Cookie-Einstellungen links
│   └── ConsentManager.tsx   # "use client" — wraps ConsentManagerProvider + banner/dialog
└── lib/
    ├── utils.ts             # cn() — clsx + tailwind-merge
    ├── consent-theme.ts     # c15t Theme object, mirrors globals.css color tokens
    └── consent-translations.ts  # German strings for the consent banner/dialog
```

---

## Code Conventions

### TypeScript
- Strict mode is enabled — no `any`, no implicit `any`
- Prefer `type` over `interface` for props
- Export types alongside their components

### Components
- Use Server Components by default; add `"use client"` only when needed (event handlers, state, hooks, browser APIs)
- One component per file
- Props type named `<ComponentName>Props`

### Styling — actual convention used throughout this codebase
Pages mix Tailwind utility classes (layout: `flex`, `mb-*`, responsive, `cn()`-merged conditional classes) **with inline `style={{}}` objects** for exact colors, pixel values, letter-spacing, and `text-transform`. This is intentional and consistent across every existing page (see [Navigation.tsx](src/components/Navigation.tsx), [page.tsx](src/app/page.tsx)) — don't "clean it up" into pure Tailwind classes uninvited; match the existing pattern when editing nearby code.
- Color palette lives in [globals.css](src/app/globals.css) `@theme inline` (`--color-accent: #2C5F3A` dark green, `--color-text: #797979`, `--color-surface: #F8F7F7`), but most components reference the raw hex values directly (`#2C5F3A`, `#797979`) rather than the CSS variables — match whichever convention the surrounding file already uses.
- Use `cn()` from `lib/utils` for conditional class merging.
- Desktop layout uses a recurring `paddingLeft/Right: "124px"` content gutter — reuse it for new sections rather than introducing a different max-width pattern.
- Section backgrounds alternate: white (`#ffffff`) and surface grey (`#F8F7F7`) — avoid two consecutive sections with the same background.

### Heading hierarchy — strictly enforced
- **One `<h1>` per page** — always the page title (e.g. „Erstberatung", „Über mich"). The h1 CSS in `globals.css` renders it green, uppercase, 20px.
- **`<h2>`** for section headings within a page (e.g. „Was Sie erwartet", „So läuft es ab").
- **`<h3>`** for card/item titles within a section (e.g. individual FAQ items, feature cards).
- Do not use `<h1>` for section headings even if you want the green/uppercase style — add an inline style or class to an `<h2>` instead.

### Images
- Use `<Image fill>` with a `position: relative` container and `aspectRatio` style — not static `width`/`height` — for portrait and content photos.
- All site images live in `public/images/`. Do not create new image files; use what's already there.

### shadcn/ui
Not installed. If asked to add it, run the CLI first (`npx shadcn@latest init`) — don't assume `components/ui/` exists.

---

## SEO

### Title & metadata pattern
- All page titles follow: `[Primary Keyword] [Ort] – CGK Rechtsanwaltskanzlei` (or `– CGK Rechtsanwaltskanzlei Dormagen` where natural).
- Impressum and Datenschutz use short titles without location (legal pages, no ranking value).
- `metadataBase` is set in `layout.tsx` to `https://www.cgk-recht.de`.

### Metadata on client components
`kontakt/page.tsx` is `"use client"` — you cannot `export const metadata` from a client component. Solution: create a sibling `layout.tsx` in the same folder that exports `metadata` and renders `{children}` unchanged. See `src/app/kontakt/layout.tsx` as the reference pattern.

### Structured data
A `LegalService` JSON-LD schema is injected in `layout.tsx` via `<script type="application/ld+json">` inside `<head>`. It includes name, address (Mörikestraße 5, 41541 Dormagen), phone, email, opening hours, and areaServed. Update it here if contact details change.

### Sitemap & robots
- `src/app/sitemap.ts` generates `/sitemap.xml` via Next.js `MetadataRoute.Sitemap`. Add new public pages here when created; omit Impressum and Datenschutz.
- `public/robots.txt` allows all crawlers and references the sitemap URL.

---

## Cookie Consent (c15t)

Implemented via `@c15t/nextjs` in **offline mode** (consent stored locally in browser only — no backend, no account, free). See [ConsentManager.tsx](src/components/ConsentManager.tsx).

Categories: `necessary` (always on), `measurement`, `marketing`. No analytics/tracking script is wired up yet — when Google Analytics or similar is added, gate it via the `scripts` option on `ConsentManagerProvider` (see the commented example in `ConsentManager.tsx`), not by adding a separate `<Script>` tag.

**Gotchas discovered while integrating (don't relitigate these):**
- The package's built-in i18n does **not** actually ship German translations in v2.x despite docs claiming 8 languages — only English is bundled. German copy is supplied manually via `i18n.messages.de` in `consent-translations.ts`. If updating banner/dialog copy, edit that file.
- Components imported from the bare `@c15t/nextjs` package root lack a `"use client"` boundary in some resolution paths. Importing `ConsentDialogLink` (or similar) directly into a **Server Component** (e.g. `Footer.tsx`) breaks the production build with `createContext is not a function`. Fix: import it from the dedicated client subpath, e.g. `@c15t/nextjs/components/consent-dialog-link`. `transpilePackages` in `next.config.ts` does **not** fix this — the import path does.
- Theme tokens use `satisfies Theme` (not the package's `defineTheme` helper — it's declared in the types but not actually re-exported at runtime in this version).

---

## What Claude Gets Wrong — Fix These

- **Do not** assume shadcn/ui is set up — it isn't; check before using its components
- **Do not** install `framer-motion` separately — it's already a dependency (even though unused so far)
- **Do not** use `className` string concatenation — always use `cn()` from `lib/utils`
- **Do not** convert existing inline `style={{}}` color/typography values to Tailwind classes unless asked — it's the established pattern, not an oversight
- **Do not** use `next/image` with static `width`/`height` when `fill` + a sized container works better
- **Do not** import c15t components from the bare `@c15t/nextjs` root inside a Server Component — use the `/components/<name>` client subpath
- **Do not** use more than one `<h1>` per page — section headings are `<h2>`, card titles are `<h3>`
- **Do not** add `export const metadata` to a `"use client"` page — put it in a sibling `layout.tsx` instead (see `kontakt/layout.tsx`)
- **Do not** write „in Köln" — the kanzlei is in Dormagen; the city in titles/descriptions is „Dormagen"
- **Do not** use „Die Erbrechtskanzlei Gerring-Keil" as brand name in titles — the consistent suffix is „CGK Rechtsanwaltskanzlei"

---

## Verification Steps

After any significant change:
1. `npm run typecheck` — must pass with zero errors
2. `npm run lint` — must pass clean
3. `npm run build` — check for build errors before marking task done (c15t-related RSC boundary errors only surface here, not in `dev`)
