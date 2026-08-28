-- Rebrand: accounts seeded before the Velue -> Velocity rename still hold
-- @velue.de addresses. Rewrite the domain in place so the published demo
-- logins keep working.
--
-- The NOT EXISTS guard skips any address whose renamed form is already taken,
-- so a re-seeded environment cannot fail this deploy on the unique index
-- "users_email_key". Re-running the migration is a no-op.
UPDATE "public"."users" AS stale
SET "email" = REPLACE(stale."email", '@velue.de', '@velocity.de')
WHERE stale."email" LIKE '%@velue.de'
  AND NOT EXISTS (
    SELECT 1
    FROM "public"."users" AS taken
    WHERE taken."email" = REPLACE(stale."email", '@velue.de', '@velocity.de')
  );
