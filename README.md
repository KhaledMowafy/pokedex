# ⚡ Pokédex

A responsive Pokémon browser built with React, TypeScript, and Vite, using a clean-architecture
layer split (domain / application / infrastructure / presentation).

## Live Preview
[Live Demo](https://pokedex-cyan-eight-61.vercel.app/paginated)

## Getting Started

```bash
npm install
npm run dev
```

```bash
npm run build     # type-check + production build
npm run preview    # preview the production build locally
npm run format      # prettier --write .
```

## Architecture

```
src/
├── domain/              # Framework-free types and contracts
│   ├── entities/Pokemon.ts
│   └── repositories/IPokemonRepository.ts
├── application/          # Orchestration only — no fetch, no React
│   └── useCases/getPokemonList.ts, getPokemonDetail.ts
├── infrastructure/        # The only layer that knows about PokeAPI's JSON shape
│   ├── mappers/pokemonMapper.ts
│   ├── repositories/PokeApiRepository.ts
│   └── di/container.ts    # single wiring point: swap the repo implementation here
└── presentation/           # React lives here only
    ├── components/
    ├── hooks/               # usePokemonPagination, usePokemonLoadMore, usePokemonDetail
    ├── pages/
    └── router.tsx
```

**Dependency direction**: `presentation → application → domain`, with `infrastructure`
implementing the `domain` contracts. Nothing in `domain/` or `application/` imports from
`infrastructure/` or `presentation/`, so the data source (PokeAPI today) can be swapped by
touching only `infrastructure/di/container.ts`.

## Features

- **Two list views** at `/paginated` and `/load-more`, sharing the same `application/` use case
  and only differing in how the `presentation/` hook consumes it (`useQuery` vs `useInfiniteQuery`)
- **Detail page** at `/pokemon/:id` — name, sprite, height, weight, types, base stats, abilities,
  base experience
- **Loading states** via skeleton placeholders matching the card/detail layout
- **Error states** with a retry action, backed by an `ErrorBoundary` for render-time crashes
- **Responsive grid** — 2 columns on mobile, 3 on tablet, 4 on desktop

## Bonus features implemented

- ✅ **React Query** — `useQuery` for pagination/detail, `useInfiniteQuery` for load-more
  (handles page accumulation and de-duplication natively)
- ✅ **Error Boundaries** — wraps the router to catch render-time errors app-wide
- ⚠️ **React Suspense** — not fully migrated to `useSuspenseQuery`; current hooks expose
  `isLoading`/`isError` flags consumed directly by each page instead of throwing to a
  `<Suspense>` boundary. Given more time, the next step would be switching to
  `useSuspenseQuery`/`useSuspenseInfiniteQuery` and lifting a shared `<Suspense fallback>`
  into `router.tsx`.
- ❌ **React Server Components (RSC)** — intentionally not attempted. RSC requires
  bundler-level module-graph splitting between server and client components, which isn't
  addable to a standard Vite/CRA setup directly — it needs a framework or plugin built for it
  (Next.js App Router, the minimal Waku framework, or the experimental
  `@vitejs/plugin-rsc` + React Router RSC integration). All three still require choosing a
  different bundler pipeline than plain Vite. Given the 4-hour timebox and that RSC is
  explicitly optional while the core requirements are not, I prioritized shipping the
  required scope over migrating the whole build tool mid-task.

## What I'd do next with more time

- Migrate to `useSuspenseQuery` + a shared `<Suspense>` boundary in the router
