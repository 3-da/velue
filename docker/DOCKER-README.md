# Docker Setup for Velocity Project

## Quick Start

1. **Start PostgreSQL database:**
   ```bash
   docker-compose up -d
   ```

2. **Run backend and frontend locally:**
   ```bash
   # In one terminal
   nx serve backend

   # In another terminal
   nx serve frontend
   ```

3. **Access your applications:**
   - **Frontend (Angular):** http://localhost:4200
   - **Backend (NestJS):** http://localhost:3000
   - **PostgreSQL:** localhost:5433
   - **Prisma Studio:** Run `nx run shared-data-access:db-studio`

## Services

### PostgreSQL 17
- **Container:** `velocity-postgres`
- **Port:** 5433
- **Database:** `velocity_db`
- **User:** `velocity_user`
- **Password:** `velocity_password`
- **Volume:** `velocity_postgres_data` - pinned by name in `docker-compose.yml` so it no
  longer derives from the checkout directory. Renaming the project folder used to make
  Compose silently bind a new, empty volume.

## Useful Commands

```bash
# Start database
docker-compose up -d

# View logs
docker-compose logs -f postgres

# Stop database
docker-compose down

# Stop and remove volumes (WARNING: permanently deletes all database data)
docker-compose down -v

# Back up before anything destructive
docker exec velocity-postgres pg_dump -U velocity_user -d velocity_db --no-owner --no-acl > backup.sql

# Restore
docker exec -i velocity-postgres psql -U velocity_user -d velocity_db < backup.sql

# Access PostgreSQL CLI
docker exec -it velocity-postgres psql -U velocity_user -d velocity_db

# View running containers
docker-compose ps
```

## Database Connection

### From Host Machine
- **Host:** localhost
- **Port:** 5433
- **Database:** velocity_db
- **Username:** velocity_user
- **Password:** velocity_password
- **Connection String:** `postgresql://velocity_user:velocity_password@localhost:5433/velocity_db`

## Environment Files

Two are required, both gitignored:

- `.env.development` - read by the Nest app
- `.env` - read by the Prisma CLI (`db-studio`, `db-migrate`, `db-seed`), which ignores
  `.env.development` entirely. Without it the CLI fails with
  `Environment variable not found: DATABASE_URL`.

Keep `DATABASE_URL` identical in both. Copy `.env.example` for the full list.

## Development Workflow

1. Start PostgreSQL: `docker-compose up -d`
2. Generate the Prisma client: `nx run shared-data-access:db-generate`
3. Run migrations: `nx run shared-data-access:db-migrate`
4. Start backend: `nx serve backend`
5. Start frontend: `nx serve frontend`
6. View database: `nx run shared-data-access:db-studio`

### Seeding

> **`nx run shared-data-access:db-seed` is destructive.** `prisma/seed.ts` opens with
> `deleteMany({})` on every table, so it erases registered accounts and bookings, not just
> the fixtures it replaces. Run it on a first-time setup, or after a deliberate reset -
> never to "top up" a database you care about. Back up first if in doubt.

## Production Deployment

- **Frontend:** Deployed to Vercel
- **Backend + Database:** Deployed to Railway
- Production environments use their own build and deployment processes