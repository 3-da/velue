# Docker Setup for Velue Project

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
   - **PostgreSQL:** localhost:5432
   - **Prisma Studio:** Run `nx run shared-data-access:db-studio`

## Services

### PostgreSQL 17
- **Container:** `velue-postgres`
- **Port:** 5432
- **Database:** `velue_db`
- **User:** `velue_user`
- **Password:** `velue_password`

## Useful Commands

```bash
# Start database
docker-compose up -d

# View logs
docker-compose logs -f postgres

# Stop database
docker-compose down

# Stop and remove volumes (WARNING: This will delete your database data)
docker-compose down -v

# Access PostgreSQL CLI
docker exec -it velue-postgres psql -U velue_user -d velue_db

# View running containers
docker-compose ps
```

## Database Connection

### From Host Machine
- **Host:** localhost
- **Port:** 5432
- **Database:** velue_db
- **Username:** velue_user
- **Password:** velue_password
- **Connection String:** `postgresql://velue_user:velue_password@localhost:5432/velue_db`

## Development Workflow

1. Start PostgreSQL: `docker-compose up -d`
2. Run migrations: `nx run shared-data-access:db-migrate`
3. Seed database: `nx run shared-data-access:db-seed`
4. Start backend: `nx serve backend`
5. Start frontend: `nx serve frontend`
6. View database: `nx run shared-data-access:db-studio`

## Production Deployment

- **Frontend:** Deployed to Vercel
- **Backend + Database:** Deployed to Railway
- Production environments use their own build and deployment processes