# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint (flat config, ESLint 9+)
```

No test framework is configured — tests would need to be added before running any.

## Architecture

This is a Next.js 16.2.0 app using the App Router. Key conventions:

- **[app/](app/)** — All routes and layouts live here (App Router)
- **[app/layout.tsx](app/layout.tsx)** — Root layout; sets fonts (Geist via `next/font/google`) and global metadata
- **[app/globals.css](app/globals.css)** — Tailwind CSS v4 (`@import "tailwindcss"`) with CSS custom properties for theming and dark mode
- **[app/page.tsx](app/page.tsx)** — Home route (`/`)
- **[public/](public/)** — Static assets served at root

**Key versions with non-obvious implications:**
- **Next.js 16.2.0** — Has breaking changes vs. earlier versions; read `node_modules/next/dist/docs/` before writing Next.js-specific code
- **Tailwind CSS v4** — Uses `@import "tailwindcss"` syntax (not `@tailwind base/components/utilities`) and `@tailwindcss/postcss` plugin
- **ESLint 9** — Flat config format in `eslint.config.mjs` (not `.eslintrc`)

Path alias `@/*` resolves to the project root.
