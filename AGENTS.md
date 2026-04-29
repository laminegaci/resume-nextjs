# AGENTS.md - Repository Guidelines

## Commands

### Development
- `npm run dev` - Start dev server with Turbopack
- `npm run build` - Production build (static export to `out/`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Notes
- No test framework is configured. Add one (e.g., Vitest/Jest) if tests are needed.
- Uses `npm` (pnpm lockfile also present; pick one and stay consistent).

## Project Structure

```
src/
  app/
    components/       # Feature-based component folders
      home/           # Page section components
      layout/         # Header, footer, logo
    types/            # Type declarations
    globals.css       # Tailwind + custom styles
    layout.tsx        # Root layout
    page.tsx          # Home page
  utils/              # Utility functions (e.g., image.ts)
public/               # Static assets
```

## Code Style

### Imports
- Use path alias `@/*` for `src/*` (e.g., `import { getImgPath } from "@/utils/image"`)
- Import order: Next.js built-ins → React → external libs → relative imports → CSS
- Use double quotes for import paths

### Components
- Use **arrow function** syntax: `const ComponentName = () => { ... }`
- **Default export** at bottom: `export default ComponentName`
- **PascalCase** for component names and folder names (kebab-case for folders is acceptable: `hero-section/`)
- Each component lives in its own folder with an `index.tsx` file
- Add `"use client"` only when using hooks (`useState`, `useEffect`) or event handlers
- Most components should be server components (no `"use client"`)

### TypeScript
- Strict mode enabled in `tsconfig.json`
- No explicit prop interfaces observed yet; add them when components accept props
- Avoid `any`; use proper types or `unknown` with narrowing
- No explicit return type annotations on components (implicit is fine)
- Custom type declarations live in `src/app/types/`

### Naming Conventions
- Components: PascalCase (`HeroSection`, `AboutMe`)
- Folders: kebab-case (`hero-section/`, `about-me/`)
- Utilities: camelCase (`getImgPath`, `getDataPath`)
- CSS classes: camelCase for custom classes (`.softGray`, `.mistGray`)

### Styling (Tailwind CSS v4)
- All styling via `className` with Tailwind utility classes
- Custom theme colors: `primary` (#FE4300), `secondary` (#868686), `softGray`, `mistGray`, `gray`
- Custom breakpoints: `xs` (425px) in addition to Tailwind defaults
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Common custom utilities: `.container`, `.label`, `.input`
- Heading styles defined in `@layer base` (h1-h6)
- Print styles defined via `@media print`

### Error Handling
- ESLint and TypeScript errors are ignored during builds (`next.config.ts`)
- Client-side data fetching should include error states (see `contact-bar/index.tsx`)
- No global error boundary configured yet

### Images
- Use `getImgPath()` from `@/utils/image` for image paths (handles production basePath)
- Use Next.js `<Image>` component with `getImgPath()` for optimization
- `unoptimized: true` in next config (static export mode)

### Data Fetching
- Client-side `fetch` with `useEffect` for JSON data (see `contact-bar/index.tsx`)
- Use `getDataPath()` from `@/utils/image` for data file paths

## ESLint
- Config: `eslint.config.mjs` extends `next/core-web-vitals` and `next/typescript`
- Run with `npm run lint`

## Git
- Do not commit unless explicitly asked
- Never commit `.env` files or secrets
