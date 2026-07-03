-- Enforce idempotent Stripe fulfilment: a given payment intent can credit coins only once.

-- If this database has duplicate paymentIntentId values from before this fix (the pre-fix
-- replay bug could credit the same Stripe session twice), null out the paymentIntentId on
-- every row but the earliest so the unique index below can be created. The purchase record
-- itself is kept for the audit trail; only the now-redundant external reference is cleared.
WITH duplicates AS (
  SELECT id, ROW_NUMBER() OVER (PARTITION BY "paymentIntentId" ORDER BY "createdAt") AS row_number
  FROM "public"."coins_purchases"
  WHERE "paymentIntentId" IS NOT NULL
)
UPDATE "public"."coins_purchases"
SET "paymentIntentId" = NULL
WHERE id IN (SELECT id FROM duplicates WHERE row_number > 1);

-- CreateIndex
CREATE UNIQUE INDEX "coins_purchases_paymentIntentId_key" ON "public"."coins_purchases"("paymentIntentId");
