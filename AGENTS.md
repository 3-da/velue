# velocity — project overlay

Repo-specific instructions layered on top of the global canon.

Before changing code or deployment configuration, read `CLAUDE.md` completely. It is the authoritative guide to the Nx layout, data model, design system, environment files, deployment contracts and verification commands. Read `ANGULAR_GUIDELINES.md` before Angular work.

## Stack

Nx 21 · Angular 20 · PrimeNG 20 · Tailwind CSS 4 · NestJS 11 · Prisma 6 · PostgreSQL 17 · Stripe · Jest · Vitest · Playwright · Railway · Vercel.

## Conventions

- The product name is Velocity and the npm scope is `@velocity/*`; never reintroduce the retired name in source, docs, fixtures, UI copy or hostnames.
- Frontend design tokens live in `apps/frontend/src/styles.scss`; PrimeNG mappings live in `apps/frontend/src/velocity-theme.ts`.
- Shared presentation belongs in `apps/frontend/src/shared/components/`; ride lists render through `RideRowComponent`.
- Shared API interfaces live in `libs/shared-models`; backend DTO classes add validation without duplicating the shared contract.

## Gotchas

- Prisma commands read `.env`; the Nest app reads `.env.development`. Keep `DATABASE_URL` aligned in both.
- `prisma/seed.ts`, `prisma migrate reset` and `docker-compose down -v` destroy local data. Back up first when the database matters.
- The generated Prisma client is gitignored and must be generated after cloning and in every build environment.
- The production API hostname is compiled into `apps/frontend/src/environments/environment.prod.ts`; verify it directly before deployment.
