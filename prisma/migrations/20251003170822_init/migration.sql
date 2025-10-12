-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('CUSTOMER', 'TRAINER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."TrainingType" AS ENUM ('SPINNING_BEGINNER', 'SPINNING_INTERMEDIATE', 'SPINNING_ADVANCED', 'SPINNING_HIIT', 'SPINNING_ENDURANCE');

-- CreateEnum
CREATE TYPE "public"."TrainingStatus" AS ENUM ('SCHEDULED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "public"."TrainingTimeSlot" AS ENUM ('SLOT_0900', 'SLOT_1030', 'SLOT_1200', 'SLOT_1600', 'SLOT_1730', 'SLOT_1900', 'SLOT_2030');

-- CreateEnum
CREATE TYPE "public"."BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'NO_SHOW', 'ATTENDED');

-- CreateEnum
CREATE TYPE "public"."CoinsTransactionType" AS ENUM ('PURCHASE', 'BOOKING_CHARGE', 'BOOKING_REFUND', 'ADMIN_ADJUSTMENT', 'PROMOTIONAL');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "public"."ConsentType" AS ENUM ('TERMS_OF_SERVICE', 'PRIVACY_POLICY', 'MARKETING_COMMUNICATIONS');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "role" "public"."UserRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "passwordLastChanged" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."customers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "preferredTrainingTypes" "public"."TrainingType"[],
    "emergencyContact" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_consents" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "consentType" "public"."ConsentType" NOT NULL,
    "granted" BOOLEAN NOT NULL,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    "ipAddress" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "user_consents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."trainers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "certification" TEXT NOT NULL,
    "specialization" "public"."TrainingType"[],

    CONSTRAINT "trainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."admins" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."training_sessions" (
    "id" TEXT NOT NULL,
    "trainerId" TEXT NOT NULL,
    "trainingType" "public"."TrainingType" NOT NULL,
    "date" DATE NOT NULL,
    "startTime" "public"."TrainingTimeSlot" NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 45,
    "maxParticipants" INTEGER NOT NULL DEFAULT 30,
    "coinsRequired" INTEGER NOT NULL DEFAULT 10,
    "status" "public"."TrainingStatus" NOT NULL DEFAULT 'SCHEDULED',
    "qrCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "training_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bookings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "trainingSessionId" TEXT NOT NULL,
    "status" "public"."BookingStatus" NOT NULL DEFAULT 'PENDING',
    "coinsUsed" INTEGER NOT NULL DEFAULT 10,
    "bookedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelledAt" TIMESTAMP(3),
    "attendedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."coins_transactions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "public"."CoinsTransactionType" NOT NULL,
    "description" TEXT NOT NULL,
    "balanceAfter" INTEGER NOT NULL,
    "relatedBookingId" TEXT,
    "orderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coins_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."coins_purchases" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "coinsPackageId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "totalPrice" DECIMAL(8,2) NOT NULL,
    "paymentStatus" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "paymentMethod" TEXT,
    "paymentIntentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "coins_purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."coins_packages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coins" INTEGER NOT NULL,
    "price" DECIMAL(8,2) NOT NULL,
    "discount" DECIMAL(5,2) DEFAULT 0.00,
    "description" TEXT,
    "stripePriceId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "coins_packages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "public"."users"("role");

-- CreateIndex
CREATE INDEX "users_isActive_idx" ON "public"."users"("isActive");

-- CreateIndex
CREATE INDEX "users_role_isActive_idx" ON "public"."users"("role", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "customers_userId_key" ON "public"."customers"("userId");

-- CreateIndex
CREATE INDEX "customers_userId_idx" ON "public"."customers"("userId");

-- CreateIndex
CREATE INDEX "customers_preferredTrainingTypes_idx" ON "public"."customers"("preferredTrainingTypes");

-- CreateIndex
CREATE INDEX "user_consents_userId_idx" ON "public"."user_consents"("userId");

-- CreateIndex
CREATE INDEX "user_consents_consentType_idx" ON "public"."user_consents"("consentType");

-- CreateIndex
CREATE UNIQUE INDEX "user_consents_userId_consentType_key" ON "public"."user_consents"("userId", "consentType");

-- CreateIndex
CREATE UNIQUE INDEX "trainers_userId_key" ON "public"."trainers"("userId");

-- CreateIndex
CREATE INDEX "trainers_userId_idx" ON "public"."trainers"("userId");

-- CreateIndex
CREATE INDEX "trainers_certification_idx" ON "public"."trainers"("certification");

-- CreateIndex
CREATE INDEX "trainers_specialization_idx" ON "public"."trainers"("specialization");

-- CreateIndex
CREATE UNIQUE INDEX "admins_userId_key" ON "public"."admins"("userId");

-- CreateIndex
CREATE INDEX "admins_userId_idx" ON "public"."admins"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "training_sessions_qrCode_key" ON "public"."training_sessions"("qrCode");

-- CreateIndex
CREATE INDEX "training_sessions_date_idx" ON "public"."training_sessions"("date");

-- CreateIndex
CREATE INDEX "training_sessions_trainerId_idx" ON "public"."training_sessions"("trainerId");

-- CreateIndex
CREATE INDEX "training_sessions_status_idx" ON "public"."training_sessions"("status");

-- CreateIndex
CREATE UNIQUE INDEX "training_sessions_date_startTime_key" ON "public"."training_sessions"("date", "startTime");

-- CreateIndex
CREATE INDEX "bookings_userId_idx" ON "public"."bookings"("userId");

-- CreateIndex
CREATE INDEX "bookings_trainingSessionId_idx" ON "public"."bookings"("trainingSessionId");

-- CreateIndex
CREATE INDEX "bookings_status_idx" ON "public"."bookings"("status");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_userId_trainingSessionId_key" ON "public"."bookings"("userId", "trainingSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "coins_transactions_orderId_key" ON "public"."coins_transactions"("orderId");

-- CreateIndex
CREATE INDEX "coins_transactions_userId_idx" ON "public"."coins_transactions"("userId");

-- CreateIndex
CREATE INDEX "coins_transactions_type_idx" ON "public"."coins_transactions"("type");

-- CreateIndex
CREATE INDEX "coins_transactions_createdAt_idx" ON "public"."coins_transactions"("createdAt");

-- CreateIndex
CREATE INDEX "coins_purchases_userId_idx" ON "public"."coins_purchases"("userId");

-- CreateIndex
CREATE INDEX "coins_purchases_paymentStatus_idx" ON "public"."coins_purchases"("paymentStatus");

-- CreateIndex
CREATE INDEX "coins_packages_isActive_idx" ON "public"."coins_packages"("isActive");

-- AddForeignKey
ALTER TABLE "public"."customers" ADD CONSTRAINT "customers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_consents" ADD CONSTRAINT "user_consents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."trainers" ADD CONSTRAINT "trainers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."admins" ADD CONSTRAINT "admins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."training_sessions" ADD CONSTRAINT "training_sessions_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "public"."trainers"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."customers"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_trainingSessionId_fkey" FOREIGN KEY ("trainingSessionId") REFERENCES "public"."training_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins_transactions" ADD CONSTRAINT "coins_transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."customers"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins_transactions" ADD CONSTRAINT "coins_transactions_relatedBookingId_fkey" FOREIGN KEY ("relatedBookingId") REFERENCES "public"."bookings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins_transactions" ADD CONSTRAINT "coins_transactions_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."coins_purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins_purchases" ADD CONSTRAINT "coins_purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."customers"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins_purchases" ADD CONSTRAINT "coins_purchases_coinsPackageId_fkey" FOREIGN KEY ("coinsPackageId") REFERENCES "public"."coins_packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
