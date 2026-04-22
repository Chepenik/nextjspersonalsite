# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start local dev server (Next.js) on http://localhost:3000
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (extends `next/core-web-vitals`)

No test framework is configured.

## Stack

- Next.js 13 using the **Pages Router** (`src/pages`), not the App Router. Do not introduce `app/` routes without the user's explicit direction.
- React 18, JavaScript (no TypeScript — `jsconfig.json` configures the `@/*` → `src/*` path alias).
- Tailwind CSS with `darkMode: "class"` and custom `primary` / `primaryDark` colors. Tailwind `screens` are overridden to use **max-width** breakpoints (e.g. `md:` means `max-width: 767px`), which is the inverse of Tailwind's default — keep this in mind when adding responsive classes.
- Framer Motion for page transitions, wrapped in `AnimatePresence` in `_app.js` with `key={router.asPath}`.

## Architecture notes

- `src/pages/_app.js` wraps every page with `Navbar`, `Footer`, the Montserrat font variable (`--font-mont`), and the Framer Motion `AnimatePresence`. Page-level transitions are driven by `components/TransitionEffect.js`.
- Theme (light/dark) is managed by `src/components/Hooks/useThemeSwitch.js`, which reads `prefers-color-scheme`, persists to `localStorage`, and toggles the `dark` class on `<html>`. `_document.js` also contains an (empty) `beforeInteractive` theme-switcher script slot — prefer updating the hook rather than inlining scripts.
- Google Analytics is loaded directly in `_document.js` with a hardcoded GA ID (`G-LVR3T1LHBR`). `src/lib/gtag.js` exposes `pageview`/`event` helpers keyed off `NEXT_PUBLIC_GA_ID` but is **not currently wired into route changes** — the `_document.js` inline script is the active path.
- Resume PDF lives at `public/Conor Chepenik Resume 2024.pdf` and is linked directly from the site.
- `src/pages/binmucker.js` is a personal/secondary page kept alongside the standard `about`/`projects`/`articles` routes.
