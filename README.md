# Velué Fitness Booking System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Angular](https://img.shields.io/badge/Angular-20.1-DD0031?logo=angular&logoColor=white)](https://angular.io/)
[![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.16-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Nx](https://img.shields.io/badge/Nx-21.4-143055?logo=nx&logoColor=white)](https://nx.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A full-stack fitness booking system with credit-based payments, built as an Nx monorepo. This is a **real client project** developed under tight time constraints during a job transition, approved for portfolio use. It demonstrates rapid MVP development capabilities and production-ready architectural thinking.

**Key Achievement**: Fully functional booking system with Stripe integration, JWT authentication, and role-based access control delivered within aggressive timeline constraints.

---

## Table of Contents

- [Project Context](#project-context)
- [About the Project](#about-the-project)
- [Quick Start & Testing](#quick-start--testing)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Testing the Application](#testing-the-application)
- [API Documentation](#api-documentation)
- [Project Status and Roadmap](#project-status-and-roadmap)
- [Development Approach and Decisions](#development-approach-and-decisions)
- [Security Considerations](#security-considerations)
- [Known Technical Debt](#known-technical-debt)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Context

**This is a rapid MVP built under significant time constraints during a job transition.**

- **Real Client Project**: Built for an actual client in the German fitness industry
- **Portfolio Approved**: Client has approved this project for portfolio and demonstration purposes
- **Time Constraints**: Developed with 1-hour daily coding sessions to meet client deadline
- **Current Status**: Functional MVP with Customer role fully implemented
- **Next Steps**: Requires comprehensive testing, refactoring, and Trainer/Admin role implementation

**Honest Assessment**: This project prioritizes working features over comprehensive test coverage and production hardening. It demonstrates my ability to deliver functional software under tight deadlines while maintaining clean architecture and clear improvement paths.

---

## About the Project

Velué is a **complete booking system and business management platform** for fitness studios, specifically designed for the German market with GDPR/DSGVO compliance built-in.

### Business Domain

- **Industry**: Fitness & Wellness (German market)
- **Business Model**: Credit-based booking system with Stripe payments
- **Target Users**: Fitness studio owners, trainers, and customers
- **Key Differentiator**: GDPR-compliant with German localization and BSI security standards

### Intended Architecture

The system is designed as a **3-tier role system**:

- **Customer**: Book training sessions, manage credits, view booking history
- **Trainer**: Create sessions, track attendance, manage schedules
- **Admin**: System management, reports, user administration

### Current Implementation Status

✅ **Customer Role Fully Implemented** - Complete booking flow from registration to payment
📋 **Trainer Role** - Planned (database schema complete, API endpoints pending)
📋 **Admin Role** - Planned (database schema complete, API endpoints pending)

---

## Quick Start & Testing

### Production Access

**Live Application**: [https://velue.vercel.app/](https://velue.vercel.app/)

### Demo Account

No registration required - use these credentials to test immediately:

- **Email**: `test-customer@velue.de`
- **Password**: `Customer2024!`

### Test Payment Cards

Use [Stripe's test cards](https://docs.stripe.com/testing) for purchasing coins:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits (e.g., 123)
- **ZIP**: Any 5 digits (e.g., 12345)

### Credit Packages

- **Starter**: 10 coins - €15.00
- **Regular**: 40 coins - €55.00
- **Premium**: 120 coins - €160.00
- **Unlimited**: 240 coins - €300.00

### What to Test

**Authentication & Profile**:

1. Login with demo credentials
2. View coin balance in user menu
3. Change password functionality
4. Password reset flow

**Browse & Book**:

1. Navigate to "Training Sessions" to view upcoming sessions
2. Sessions grouped by date with color-coded availability
3. Book a session (requires sufficient coins)
4. View "My Bookings" to see your active bookings

**Purchase Coins**:

1. Navigate to "Pricing" menu
2. Select a credit package
3. Complete Stripe Checkout with test card
4. Confirm coins added to balance

**Cancel Booking**:

1. Go to "My Bookings"
2. Cancel any booking
3. Verify coins refunded automatically

**Responsive Design**:

- Test on mobile, tablet, and desktop sizes
- All layouts adapt responsively

**Error Handling**:

- Try booking without sufficient coins (error message)
- Try booking same session twice (prevented)
- Access protected routes without login (redirect to auth)

---

## Technology Stack

### Core Technologies

| Technology       | Version | Justification                                                                                   |
|------------------|---------|-------------------------------------------------------------------------------------------------|
| **TypeScript**   | 5.8     | Type safety across full stack, reducing runtime errors and improving maintainability            |
| **Nx Monorepo**  | 21.4    | Unified codebase management, shared libraries, optimized build caching                          |
| **NestJS**       | 11+     | Enterprise-grade Node.js framework with built-in DI, modularity, and TypeScript-first design    |
| **Angular**      | 20.1+   | Modern reactive framework with signals, standalone components, and excellent TypeScript support |
| **PostgreSQL**   | 17      | ACID compliance for transactional integrity (critical for payment/booking operations)           |
| **Prisma ORM**   | 6.16    | Type-safe database client with excellent migration workflow and generated types                 |
| **PrimeNG**      | 20+     | Comprehensive Angular UI component library with accessibility built-in                          |
| **Tailwind CSS** | 4.1     | Utility-first styling for rapid UI development with PrimeUI theme integration                   |

### Authentication & Security

| Technology              | Purpose                                                        |
|-------------------------|----------------------------------------------------------------|
| **JWT**                 | Stateless authentication with access/refresh token pattern     |
| **Argon2**              | Password hashing (BSI recommended, stronger than bcrypt)       |
| **Passport.js**         | Authentication middleware with local and JWT strategies        |
| **Helmet**              | HTTP security headers middleware                               |
| **Cookie-based tokens** | Secure token storage with httpOnly, secure, and sameSite flags |

### Payment & Financial

| Technology     | Purpose                                                           |
|----------------|-------------------------------------------------------------------|
| **Stripe**     | Payment processing with Checkout Sessions and webhook integration |
| **Decimal.js** | Precise financial calculations (avoiding floating-point errors)   |

### Development & Testing

| Technology     | Purpose                                                            |
|----------------|--------------------------------------------------------------------|
| **Vitest**     | Frontend unit testing (faster than Jest, first-class Vite support) |
| **Jest**       | Backend unit testing (NestJS standard)                             |
| **Playwright** | End-to-end testing (configured, pending implementation)            |
| **ESLint**     | Code quality and consistency enforcement                           |
| **Prettier**   | Code formatting                                                    |

### Infrastructure

| Technology         | Purpose                                                                  |
|--------------------|--------------------------------------------------------------------------|
| **Docker Compose** | PostgreSQL database containerization for consistent dev environment      |
| **Nx Cloud**       | Build caching and distributed task execution (configured for future use) |

---

## Features

### Currently Implemented ✅

#### Authentication & User Management

- ✅ User registration with customer role
- ✅ JWT-based authentication with access/refresh token pattern
- ✅ Secure password hashing with Argon2
- ✅ Password reset flow with email verification
- ✅ Password change functionality
- ✅ Token refresh mechanism
- ✅ Cookie-based token storage (httpOnly, secure, sameSite)
- ✅ Rate limiting on authentication endpoints

#### Booking System (Customer)

- ✅ View upcoming training sessions grouped by date
- ✅ Book training sessions with credit deduction
- ✅ Cancel bookings with automatic credit refund
- ✅ View personal booking history
- ✅ Real-time availability status (color-coded: green/yellow/red)
- ✅ Prevent double-booking per user/session
- ✅ Session capacity management

#### Credit System

- ✅ View available credit packages with pricing
- ✅ Purchase credits via Stripe Checkout
- ✅ Automatic credit addition after successful payment
- ✅ Credit balance tracking with real-time updates
- ✅ Transaction history with audit trail
- ✅ Automatic refunds on booking cancellation

#### Payment Integration

- ✅ Stripe Checkout Session creation
- ✅ Payment success handling and verification
- ✅ Redirect flow (Stripe → Frontend → Success processing)
- ✅ EUR currency support with German market pricing
- ✅ Test mode configuration for development

#### Frontend (Customer Portal)

- ✅ Responsive Angular 20+ application with PrimeNG components
- ✅ Authentication pages (login, registration, password reset)
- ✅ Training session browser with date-based grouping
- ✅ Booking management interface
- ✅ Credit purchase flow
- ✅ User profile with coin balance display
- ✅ Email history viewer (password reset confirmations)
- ✅ Modern Tailwind CSS 4+ styling with custom theme
- ✅ Toast notifications for user feedback

#### Database & Data Model

- ✅ Polymorphic user inheritance (BaseUser → Customer/Trainer/Admin)
- ✅ Credit transaction audit trail
- ✅ Booking lifecycle tracking
- ✅ GDPR-compliant consent management schema
- ✅ Performance-optimized indexes
- ✅ Database seeding with realistic test data

#### Security & Compliance

- ✅ Role-based access control (RBAC) guards
- ✅ User ownership verification guards
- ✅ Input validation with class-validator
- ✅ CORS configuration
- ✅ Helmet security headers
- ✅ SQL injection prevention (Prisma parameterized queries)
- ✅ XSS protection
- ✅ GDPR consent tracking schema

### Planned Features 📋

#### Trainer Role Implementation

- 📋 Create and manage training sessions
- 📋 View assigned bookings
- 📋 QR code check-in system for attendance tracking
- 📋 Session completion workflow
- 📋 Trainer dashboard with analytics

#### Admin Role Implementation

- 📋 User management (CRUD operations)
- 📋 System-wide reports and analytics
- 📋 Credit adjustments and refunds
- 📋 Training session oversight
- 📋 Admin dashboard

#### Enhanced Features

- 📋 Waitlist management for full sessions
- 📋 Email notifications (booking confirmations, reminders)
- 📋 Real-time updates with WebSockets
- 📋 Advanced booking filters and search
- 📋 Customer preferences and recommendations
- 📋 Multi-language support (currently German-focused)

#### Production Readiness

- 📋 Comprehensive unit test coverage (>80%)
- 📋 Integration tests for critical flows
- 📋 E2E tests with Playwright
- 📋 Redis for token blacklist and caching
- 📋 Structured logging with log aggregation
- 📋 Performance monitoring and APM
- 📋 CI/CD pipeline
- 📋 Production deployment configuration

---

## Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                            │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Angular 20+ SPA (PrimeNG + Tailwind CSS)                │   │
│  │  - Customer Portal                                       │   │
│  │  - Trainer Portal (Planned)                              │   │
│  │  - Admin Portal (Planned)                                │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS / REST API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Application Layer                          │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  NestJS 11+ Backend                                      │   │
│  │  ┌────────────┬────────────┬────────────┬──────────────┐ │   │
│  │  │ Auth       │ Bookings   │ Payments   │ Users        │ │   │
│  │  │ Module     │ Module     │ Module     │ Module       │ │   │
│  │  ├────────────┼────────────┼────────────┼──────────────┤ │   │
│  │  │ Training   │ Coins      │ Email      │ Admin        │ │   │
│  │  │ Sessions   │ Module     │ Module     │ Module       │ │   │
│  │  └────────────┴────────────┴────────────┴──────────────┘ │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Prisma ORM
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Data Layer                                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  PostgreSQL 17                                           │   │
│  │  - User Management (Polymorphic Inheritance)             │   │
│  │  - Booking System                                        │   │
│  │  - Credit Transactions                                   │   │
│  │  - GDPR Compliance                                       │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

External Services:
├─ Stripe (Payment Processing)
└─ Resend SMTP (Email Delivery)
```

### Monorepo Structure

```
velue/
├── apps/
│   ├── backend/                  # NestJS API server
│   │   └── src/
│   │       └── app/
│   │           ├── auth/         # Authentication & authorization
│   │           ├── customer/     # Customer profile management
│   │           ├── training-sessions/  # Sessions & booking
│   │           ├── coins/        # Credit package management
│   │           ├── stripe/       # Payment processing
│   │           ├── email/        # Email service
│   │           └── prisma/       # Database client service
│   │
│   ├── frontend/                 # Angular 20+ application
│   │   └── src/
│   │       ├── app/
│   │       │   ├── auth/         # Login/registration
│   │       │   ├── training-sessions/  # Session browser
│   │       │   ├── my-bookings/  # Booking management
│   │       │   ├── coins/        # Credit purchase
│   │       │   └── shared/       # Services, pipes, guards
│   │       └── environments/     # Environment configs
│   │
│   ├── backend-e2e/              # Backend E2E tests (Playwright)
│   └── frontend-e2e/             # Frontend E2E tests (Playwright)
│
├── libs/
│   ├── shared-data-access/       # Prisma schema & generated client
│   │   └── src/lib/generated/    # Auto-generated Prisma client
│   ├── shared-constants/         # Shared application constants
│   └── shared-models/            # Universal TypeScript interfaces
│
├── prisma/
│   ├── schema.prisma             # Database schema definition
│   ├── migrations/               # Database migration history
│   └── seed.ts                   # Test data seeding script
│
├── docker/
│   └── postgres/                 # PostgreSQL initialization
│
└── docker-compose.yml            # PostgreSQL database service
```

### Key Architectural Patterns

#### Polymorphic User Inheritance

```typescript
// Single source of truth for user data
BaseUser(id, email, password, role, ...)
   ├── Customer(coins, preferences, ...)
   ├── Trainer(certification, specialization, ...)
   └── Admin(permissions, ...)
```

**Benefits**:

- Single authentication flow for all roles
- Shared user attributes (email, password) without duplication
- Type-safe role-specific data access
- Simplified GDPR compliance (single user deletion cascades)

#### Universal DTO Strategy

```typescript
// Shared library (@velue/shared-models)
export type CreateBookingRequest = {
  trainingSessionId: string;
  userId: string;
};

// Backend validates with decorators
export class CreateBookingDto implements CreateBookingRequest {
  @IsUUID() trainingSessionId: string;
  @IsUUID() userId: string;
}

// Frontend uses type-safe interface (no decorators)
const request: CreateBookingRequest = {...};
```

**Benefits**:

- Single source of truth for API contracts
- No code duplication between frontend/backend
- Backend adds validation only when needed
- Frontend stays lightweight (smaller bundle)
- Refactor once, updates everywhere

#### Credit Transaction Audit Trail

Every credit change is recorded with:

- Transaction type (purchase, booking, refund, adjustment)
- Amount and balance after transaction
- Related booking reference (if applicable)
- Timestamp for compliance

### Database Schema Highlights

**Fixed Time Slots**: Prevents scheduling conflicts by using predefined enum slots (9:00, 10:30, 12:00, etc.)

**Soft Deletes**: `isActive` flag on users preserves data for legal compliance while preventing login

**Performance Indexes**: Strategic indexes on frequently queried fields (userId, email, date, status)

**Unique Constraints**: Prevent double-booking (`userId + trainingSessionId`) and time conflicts (`date + startTime`)

### Authentication Flow

```
1. User Login
   ├─ POST /auth/login
   ├─ Validate credentials (Argon2 hash comparison)
   ├─ Generate JWT access token (15 min expiry)
   ├─ Generate refresh token (7 day expiry)
   └─ Set httpOnly cookies

2. Protected Request
   ├─ Extract JWT from cookie/header
   ├─ Verify token signature
   ├─ Check token blacklist (in-memory, Redis planned)
   ├─ Extract user claims (id, role)
   └─ Attach to request.user

3. Token Refresh
   ├─ POST /auth/refresh
   ├─ Validate refresh token
   ├─ Generate new access token
   └─ Set new cookies

4. Logout
   ├─ POST /auth/logout
   ├─ Add refresh token to blacklist
   └─ Clear cookies
```

---

## Getting Started

### Prerequisites

- **Node.js**: 20.x or later
- **npm**: 10.x or later
- **Docker & Docker Compose**: For PostgreSQL database
- **Git**: For cloning the repository

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/velue.git
cd velue
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start PostgreSQL Database

```bash
docker-compose up -d
```

Verify database is running:

```bash
docker-compose ps
# Should show velue-postgres as "Up"
```

#### 4. Run Database Migrations

```bash
npx nx run shared-data-access:db-migrate
```

#### 5. Seed Database with Test Data

```bash
npx nx run shared-data-access:db-seed
```

**Seed Data Includes**:

- Demo customer account: `test-customer@velue.de` / `Customer2024!`
- Predefined credit packages (Starter, Regular, Premium, Unlimited)
- Upcoming training sessions for testing
- Sample bookings

#### 6. Generate Prisma Client

```bash
npx nx run shared-data-access:db-generate
```

### Running the Application

#### Option A: With Docker (Database Only)

Backend and frontend run natively via `nx serve` for optimal development experience.

```bash
# Terminal 1: Start PostgreSQL
docker-compose up -d

# Terminal 2: Start Backend (http://localhost:3000/api)
npx nx serve backend

# Terminal 3: Start Frontend (http://localhost:4200)
npx nx serve frontend
```

#### Option B: Without Docker

If you have PostgreSQL 17 installed locally:

```bash
# Update .env.development with your local PostgreSQL connection
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/velue_db

# Run migrations and seed
npx nx run shared-data-access:db-migrate
npx nx run shared-data-access:db-seed

# Start services
npx nx serve backend
npx nx serve frontend
```

### Environment Configuration

**For Security**: All `.env.*` files are gitignored. Use `.env.example` as a template:

```bash
# Copy template and add your own credentials
cp .env.example .env.development
```

You'll need to create free accounts for:

- **Stripe** (test mode): [dashboard.stripe.com/register](https://dashboard.stripe.com/register)
- **Resend** (100 emails/day free): [resend.com/signup](https://resend.com/signup)

⚠️ **Important**: Never commit real API keys to git. In production, environment variables should be externally managed via Railway, Vercel, or similar platform environment configuration.

---

## Testing the Application

### Demo Account

**Email**: `test-customer@velue.de`
**Password**: `Customer2024!`

### User Registration Flow

1. Navigate to `http://localhost:4200`
2. Click "Sign Up" in the menu
3. Fill in registration form:

- First Name, Last Name
- Email (must be unique)
- Password (minimum 12 characters, must include uppercase, lowercase, number, special character)
- Birth Date (required for age verification)
- Optional: Phone, Address

4. Submit form
5. Automatic login redirect to home page
6. JWT tokens stored in httpOnly cookies

### User Login Flow

1. Click "Sign In" in menu
2. Enter email and password
3. On success: Redirect to home page with authentication
4. On failure: Error toast notification

### Browsing Training Sessions

1. Navigate to "Training Sessions" menu
2. View upcoming sessions grouped by date
3. Tabs show different dates
4. Each session displays:

- Training type (Spinning Beginner, Intermediate, etc.)
- Date and time slot
- Trainer name
- Available spots (color-coded: green = plenty, yellow = filling up, red = almost full)
- Required coins
- Booking status (if already booked by user)

### Purchasing Credits

1. Navigate to "Pricing" menu
2. View available credit packages:

- **Starter**: 10 coins - €15.00
- **Regular**: 40 coins - €55.00
- **Premium**: 120 coins - €160.00
- **Unlimited**: 240 coins - €300.00

3. Click "Purchase" on desired package
4. Redirects to Stripe Checkout (test mode)
5. Use test card: `4242 4242 4242 4242`, any future expiry, any CVC
6. After successful payment, redirect back to training sessions
7. Toast notification confirms coins added
8. Balance updates in user menu

### Booking a Session

1. Browse training sessions
2. Find a session with available spots
3. Click "Book Session" button
4. If insufficient coins: Error toast with coin balance
5. If sufficient coins:

- Success toast notification
- Button changes to "Cancel Booking"
- Coin balance decreases
- Available spots decrease

### Canceling a Booking

1. Navigate to "My Bookings" menu
2. View all your booked sessions
3. Click "Cancel Booking"
4. Confirmation toast
5. Coins automatically refunded to balance
6. Session removed from "My Bookings"
7. Session appears in "Training Sessions" as bookable again

### Changing Password

1. Click user menu (shows email and coin balance)
2. Select "Change Password"
3. Enter current password and new password
4. Submit form
5. Success toast confirmation

### Password Reset Flow

1. Click "Forgot Password?" on login page
2. Enter email address
3. System sends reset email (check console logs in development)
4. Click reset link in email
5. Enter new password
6. Redirect to login page
7. Login with new password

### Other Features to Test

**Email History**:

- Navigate to "Email History" menu
- View all password reset emails sent to your account

**Responsive Design**:

- Resize browser to mobile/tablet widths
- All layouts adapt responsively

**Error Handling**:

- Try booking without coins (error toast)
- Try booking same session twice (error toast)
- Try accessing protected routes without login (redirect to auth)

---

## API Documentation

### Base URL

**Development**: `http://localhost:3000`
**Production** (Planned): `https://api.velue.de`

### Main Endpoints

#### Authentication

```http
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
PUT  /auth/update-password
POST /auth/forgot-password
POST /auth/reset-password
```

#### Training Sessions

```http
GET  /training-sessions/upcoming       # Get all upcoming sessions
GET  /training-sessions/:id            # Get session by ID
PATCH /training-sessions/:id           # Update session status
```

#### Bookings

```http
POST   /booking                        # Create booking
DELETE /booking/:id                    # Cancel booking
```

#### Credits

```http
GET  /coins                            # Get available credit packages
POST /coins/buy                        # Purchase credits
```

#### Customer Profile

```http
GET /customer/:id                      # Get customer profile
GET /customer/:id/profile              # Get customer profile details
GET /customer/:id/coins                # Get coin balance
```

#### Stripe Integration

```http
POST /stripe/create-checkout-session   # Create Stripe Checkout
GET  /stripe/payment-success           # Handle payment callback
```

### Authentication

All protected endpoints require JWT Bearer token:

```http
Authorization: Bearer <access_token>
```

Or via httpOnly cookie (automatically handled by browser).

### Rate Limiting

- **Registration**: 1 per 2 seconds, 3 per hour
- **Login**: 1 per second, 5 per minute
- **Password Operations**: 3 per minute
- **Token Refresh**: 10 per minute

---

## Project Status and Roadmap

### Current Status (October 2025)

✅ **Build Status**: All projects compile successfully
✅ **Architecture**: Clean, modern, well-structured
✅ **Customer Features**: Fully functional booking and payment flow
⚠️ **Testing**: Test infrastructure configured, implementation pending
📋 **Trainer/Admin Roles**: Database schema complete, API endpoints pending

### Completed Phases

**Phase 1: Infrastructure & Authentication** ✅

- Nx monorepo setup
- PostgreSQL + Prisma ORM
- JWT authentication with refresh tokens
- User registration and login
- Password reset flow

**Phase 2: Core Business Logic** ✅ (Customer Role)

- Training session management
- Booking system with credit deduction
- Cancellation with automatic refunds
- Database seeding

**Phase 3: Financial System** ✅

- Credit package definition
- Stripe Checkout integration
- Payment success handling
- Transaction audit trail

**Phase 4: Frontend Development** ✅ (Customer Portal)

- Angular 20+ with standalone components
- PrimeNG UI components
- Responsive layouts
- Authentication flows
- Booking management interface
- Payment integration

### In Progress

**Phase 5: Testing & Deployment** 🔄

- ✅ Test infrastructure setup (Vitest, Jest, Playwright configured)
- ✅ Initial test implementation (4 tests created as proof-of-concept)
  - Unit test: `training-sessions.component.spec.ts` (13 test cases)
  - Unit test: `booking.service.spec.ts` (18 test cases)
  - E2E test: `training-sessions-booking.spec.ts` - Frontend Playwright (13 test cases)
  - E2E test: `training-sessions-booking.spec.ts` - Backend Jest (18 test cases)
- 📋 Comprehensive unit test coverage (>80%) - Planned
- 📋 Integration tests for all critical flows - Planned
- 📋 E2E tests for complete customer journey - Planned

### Roadmap

**Short Term (Next 4 Weeks)**

1. Comprehensive unit test coverage (>80%)
2. Integration tests for critical flows (booking, payment)
3. E2E tests for customer journey
4. Code refactoring for maintainability
5. Performance optimization

**Medium Term (2-3 Months)**

1. Trainer role implementation

- Session creation and management
- QR code check-in system
- Trainer dashboard

2. Admin role implementation

- User management
- System reports
- Credit adjustments

3. Email notification system
4. Real-time updates with WebSockets

**Long Term (3-6 Months)**

1. Production deployment (Vercel + Railway)
2. CI/CD pipeline
3. Performance monitoring
4. Comprehensive logging
5. Advanced features (waitlist, recommendations, multi-language)

---

## Development Approach and Decisions

### Why MVP-First?

This project was built under **real-world business constraints**:

1. **Client Deadline**: October 30, 2025 deadline requiring rapid delivery
2. **Limited Time**: 1-hour daily coding sessions due to job transition
3. **Business Value**: Client needed working features over comprehensive tests
4. **Portfolio Opportunity**: Real client project approved for demonstration

**Trade-offs Made**:

- ✅ Functional features prioritized
- ✅ Clean architecture maintained
- ✅ Security implemented correctly
- ⚠️ Test coverage deferred (now in progress)
- ⚠️ Some code refactoring needed
- ⚠️ Trainer/Admin roles planned but not yet implemented

**This demonstrates**:

- Ability to deliver under pressure
- Understanding of business priorities
- Clear technical debt tracking
- Professional maturity in decision-making

### Architectural Decisions

#### Why Nx Monorepo?

- **Code Sharing**: Universal DTOs, constants, and types between frontend/backend
- **Build Optimization**: Cached builds for faster development
- **Consistency**: Single linting, testing, and formatting configuration
- **Scalability**: Easy to add new apps (mobile, admin portal) later

#### Why NestJS?

- **Enterprise Patterns**: Dependency injection, modularity, testability
- **TypeScript-First**: Strong typing throughout backend
- **Extensive Ecosystem**: Built-in support for Prisma, JWT, Passport, validation
- **Familiar to Angular Developers**: Similar decorator-based architecture

#### Why Prisma over TypeORM?

- **Type Safety**: Auto-generated types match database schema exactly
- **Migration Workflow**: Declarative schema with excellent migration tools
- **Developer Experience**: Prisma Studio for database inspection
- **Performance**: Optimized query generation

#### Why PrimeNG over Angular Material?

- **Comprehensive Components**: 90+ components vs Material's 30+
- **Business Focus**: Data tables, calendars, charts out-of-the-box
- **Tailwind Integration**: Works seamlessly with utility-first styling
- **Accessibility**: WCAG compliance built-in

#### Why Cookie-Based Tokens vs LocalStorage?

- **Security**: httpOnly cookies prevent XSS token theft
- **CSRF Protection**: sameSite=strict flag prevents CSRF attacks
- **Automatic Handling**: Browser manages token lifecycle
- **Mobile-Ready**: Works consistently across devices

---

## Security Considerations

### Implemented Security Measures

**Authentication & Authorization**:

- ✅ Argon2 password hashing (BSI recommended, stronger than bcrypt)
- ✅ JWT with short expiry (15 minutes) + refresh token (7 days)
- ✅ httpOnly, secure, sameSite cookies
- ✅ Role-based access control (RBAC) guards
- ✅ User ownership verification guards

**Input Validation**:

- ✅ class-validator decorators on all DTOs
- ✅ UUID validation for entity IDs
- ✅ Email format validation
- ✅ Password strength requirements (12+ chars, mixed case, numbers, special)

**API Security**:

- ✅ Helmet middleware (security headers)
- ✅ CORS configuration with origin whitelist
- ✅ Rate limiting on authentication endpoints
- ✅ SQL injection prevention (Prisma parameterized queries)
- ✅ XSS protection (Angular sanitization + CSP headers)

**Payment Security**:

- ✅ No credit card data stored (Stripe handles PCI compliance)
- ✅ Server-side payment verification
- ✅ Webhook signature validation (planned for production)

**GDPR Compliance**:

- ✅ Consent tracking schema
- ✅ Soft delete with `isActive` flag
- ✅ Data retention configuration
- ✅ User data export capability (schema supports, API pending)
- ✅ Right to deletion (cascade delete configured)

### Planned Security Enhancements

📋 **Token Blacklist with Redis**: Move from in-memory Map to distributed cache
📋 **Rate Limiting with Redis**: Support horizontal scaling
📋 **Structured Logging**: Track security events for audit
📋 **Security Headers**: Additional CSP, HSTS configuration
📋 **Penetration Testing**: Third-party security audit

---

## Known Technical Debt

### Scalability Concerns

**Token Blacklist (In-Memory Map)**

- **Current**: Revoked tokens stored in memory (single server only)
- **Production Need**: Redis implementation for horizontal scaling
- **Impact**: Cannot scale horizontally until resolved
- **Demonstrates**: Understanding of scalability trade-offs while prioritizing MVP delivery

**Real-time Data Synchronization**

- **Current**: Manual refresh triggers (`refreshData()`) after mutations
- **Production Need**: WebSocket implementation for real-time updates
- **Impact**: Users must manually refresh to see booking changes
- **Workaround**: Automatic refresh after mutations works for single-user scenarios
- **Demonstrates**: Pragmatic MVP approach with clear improvement path

### Testing Debt

**Current State**: 4 proof-of-concept tests implemented to demonstrate testing infrastructure

- **Unit Tests**: 2 test files created (31 test cases total)
  - ✅ `training-sessions.component.spec.ts` - Frontend component (13 cases)
  - ✅ `booking.service.spec.ts` - Backend service (18 cases)
  - 📋 Comprehensive coverage for remaining components/services (planned)

- **E2E Tests**: 2 test files created (31 test cases total)
  - ✅ `training-sessions-booking.spec.ts` - Frontend Playwright (13 cases)
  - ✅ `training-sessions-booking.spec.ts` - Backend API (18 cases)
  - 📋 Complete customer journey tests (planned)

- **Integration Tests**: Critical flow testing (planned)
- **Load Testing**: Performance benchmarking (planned)

**Next Phase**: Expand test coverage to >80% across all modules while maintaining existing test quality standards

### Code Quality

- **Linting**: ~26 backend errors (missing return types, minor style issues)
- **Error Handling**: Some error cases need more specific handling
- **Logging**: Console logs need replacement with structured logging
- **Documentation**: Some complex functions need JSDoc comments

### Feature Completeness

- **Trainer Role**: Database schema complete, API endpoints pending
- **Admin Role**: Database schema complete, API endpoints pending
- **Email Notifications**: SMTP configured, template system pending
- **QR Code Check-in**: Schema supports, implementation pending
- **Waitlist System**: Schema supports, implementation pending

### Why This Transparency Matters

**For Employers**: Demonstrates professional maturity - ability to:

- Recognize technical debt honestly
- Understand implications of trade-offs
- Plan improvement paths systematically
- Balance business needs with engineering excellence

**For Development**: Provides clear priorities for next phase of work.

---

## Contributing

This is a client project used for portfolio purposes. While not open for external contributions, feedback and suggestions are welcome for discussion.

If you're an employer evaluating this project:

1. Feel free to clone and run locally
2. Contact me for live demonstration or code walkthrough
3. Review the comprehensive README and codebase for technical documentation

---

## License

MIT License - See [LICENSE](LICENSE) file for details.

**Note**: All API keys and credentials are gitignored for security. Use `.env.example` to set up your own test environment. In production, all secrets are managed externally via secure environment variable management.

---

## Contact

**Developer**: Darijan Avric

**Email**: contact@darijanavric.dev

**LinkedIn**: [https://www.linkedin.com/in/darijan-avric/](https://www.linkedin.com/in/darijan-avric)

**GitHub**: [github.com/darijanavric](https://github.com/darijanavric)

**Project Repository**: [https://github.com/3-da/velue](https://github.com/3-da/velue)

---

**Built with focus on**: Clean architecture • Type safety • Security • GDPR compliance • Rapid delivery • Production readiness

**Demonstrates**: Full-stack capabilities • Modern tech stack expertise • Business-driven development • Professional decision-making
