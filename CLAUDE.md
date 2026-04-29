# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server with Turbopack
- `npm run build` — production build (static export to `out/`)
- `npm run start` — start production server
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

No test framework is configured. Use `npm` (a `pnpm-lock.yaml` is also present but `package-lock.json` is the source of truth).

ESLint and TypeScript errors are intentionally ignored during builds via [next.config.ts](next.config.ts) (`ignoreDuringBuilds`, `ignoreBuildErrors`). This means `npm run lint` is the only signal — CI-style failures won't surface from `npm run build`.

## Architecture

Single-page Next.js 15 App Router portfolio. Everything renders from [src/app/page.tsx](src/app/page.tsx), which composes section components from [src/app/components/home/](src/app/components/home/) under a shared header/footer in [src/app/components/layout/](src/app/components/layout/). Navigation is in-page anchor scrolling — there are no other routes.

**Content is data-driven, not hardcoded.** Page copy lives in [public/data/page-data.json](public/data/page-data.json) (contact, education, skills, social links) and [public/data/work-data.json](public/data/work-data.json) (projects). Components fetch these JSON files client-side via `fetch()` in `useEffect`. To change content, edit the JSON — not the components.

**Path helpers in [src/utils/image.ts](src/utils/image.ts) are mandatory** for any asset URL or data fetch. `getImgPath()` and `getDataPath()` prepend the production `basePath` so the static export works when deployed to a sub-path. Hardcoding `/images/...` or `/data/...` will break the deployed site.

**Static export mode**: `next.config.ts` sets `images.unoptimized: true` and the `export` script runs `next build`. Output goes to `out/`. Don't add server-only features (API routes, server actions, ISR) — they won't survive export.

**Tailwind v4** with theme tokens defined in [src/app/globals.css](src/app/globals.css) (not `tailwind.config`). Custom colors: `primary` (`#FE4300`), `secondary`, `softGray`, `mistGray`. Custom `xs` breakpoint at 425px. Heading styles (`h1`–`h6`) and utilities (`.container`, `.label`, `.input`) are declared in `@layer base`. A `@media print` block is tuned for the `html2pdf.js` resume export — preserve it when restructuring layout.

**`next-themes` is installed but the theme provider is not wired into [layout.tsx](src/app/layout.tsx)** — dark-mode classes exist but no toggle is active. Adding a theme toggle requires wrapping the app in `ThemeProvider` first.

## Conventions

- Component per folder, `index.tsx` inside; folder names kebab-case (`hero-section/`), component names PascalCase (`HeroSection`).
- Arrow function components, default export at bottom.
- `"use client"` only when hooks or event handlers are used; default to server components.
- Path alias `@/*` → `src/*`. Use double quotes for import paths.
- Import order: Next built-ins → React → external → relative → CSS.

## Git

Do not commit unless explicitly asked.
