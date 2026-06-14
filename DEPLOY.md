# Velué — Deployment (Railway + Neon + Vercel)

Free/cheap setup: **~5€/month total** (shared with SharedBudget on the same Railway account).

| Component | Host | Cost |
|-----------|------|------|
| Backend (NestJS) | Railway (Hobby, always-warm) | shares the 5€/mo Railway plan |
| PostgreSQL | Neon (free, persistent) | 0€ |
| Frontend (Angular) | Vercel | 0€ |

> No Redis needed for Velué.

---

## 1. Database — Neon

1. Create a project at https://neon.tech → grab the connection string.
2. Use the **direct** connection string (Railway runs a long-lived container, not serverless), ending with `?sslmode=require`.
3. This becomes `DATABASE_URL` on Railway. Migrations run automatically on deploy (`prisma migrate deploy` in the start command).

> Neon free compute auto-suspends after ~5 min idle; the first query then has a ~0.5s warm-up. The app itself stays warm on Railway, so this is invisible in practice.

## 2. Backend — Railway

The repo now has `railway.json` (Nixpacks). Railway reads it automatically.

1. New project → Deploy from GitHub repo `3-da/velue`, branch `main`.
2. Railway uses these (already in `railway.json`):
   - Build: `npx prisma generate && npx nx build backend --configuration=production`
   - Start: `npx prisma migrate deploy && node dist/apps/backend/main.js`
3. Set environment variables (Railway dashboard → Variables):

   | Variable | Value |
   |----------|-------|
   | `NODE_ENV` | `production` |
   | `DATABASE_URL` | *(Neon connection string)* |
   | `JWT_SECRET` | *(generate: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)* |
   | `JWT_EXPIRATION` | `15m` |
   | `JWT_REFRESH_EXPIRATION` | `7d` |
   | `BACKEND_URL` | *(the Railway public URL — **critical** for the auth cookie Domain)* |
   | `FRONTEND_URL` | *(the Vercel URL, for CORS)* |
   | `STRIPE_SECRET_KEY` | *(Stripe test/live secret key — set here, not in git)* |
   | `SMTP_HOST` | `smtp.resend.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `resend` |
   | `SMTP_PASS` | *(Resend API key)* |
   | `SMTP_FROM` | `noreply@darijanavric.dev` |
   | `ARGON2_MEMORY_COST` | `65536` |
   | `ARGON2_TIME_COST` | `3` |
   | `ARGON2_PARALLELISM` | `4` |

4. Railway → Settings → Networking → **Generate Domain**. Put that URL into `BACKEND_URL` and into the frontend (step 3).

## 3. Frontend — Vercel

`vercel.json` is already configured (builds `frontend`, SPA rewrites).

1. Import `3-da/velue` into Vercel.
2. Update `apps/frontend/src/environments/environment.prod.ts` → set `apiUrl` to `https://<railway-domain>/api` (currently `https://velue-production.up.railway.app/api` — keep if you reuse that domain).
3. Set `FRONTEND_URL` on Railway to the Vercel domain and redeploy the backend so CORS matches.

---

## Pre-deploy checklist

- [ ] Commit & push current local changes on `main` (`docker-compose.yml`, `package.json`, specs).
- [ ] Rotate the Stripe test key that was committed in `.env.production`, set the new one only in Railway.
- [ ] Confirm `BACKEND_URL` and `FRONTEND_URL` are set before testing login (cross-site cookies need both).
