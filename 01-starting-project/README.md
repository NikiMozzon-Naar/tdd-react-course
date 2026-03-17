# React Essentials Start

A React + TypeScript application with Vite, tested with Jest and React Testing Library.

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode (TDD) |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint source files |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run validate` | typecheck + lint + test |

## Project structure

```
src/
├── app/              # App shell, root component + tests
├── components/       # Shared UI (Header, CoreConcept, …)
├── features/         # Feature modules (e.g. concepts data)
├── types/            # Shared TypeScript types
├── assets/           # Static assets (images, etc.)
├── index.tsx         # Entry point
└── index.css         # Global styles
```

Imports use the `@/` alias (e.g. `@/components`, `@/app`).  
Concept images in `src/features/concepts/data.ts` use placeholder paths; add PNGs to `src/assets/` and switch to `import x from "@/assets/...png"` when you have the files.

## Quality checks

Before committing or opening a PR, run:

```bash
npm run validate
```

This runs typecheck, lint, and tests. CI can use the same command.

Coverage thresholds are in `jest.config.js` (currently set to 0). Raise `coverageThreshold.global` as you add tests to enforce minimum coverage.
