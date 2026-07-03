import axios, { AxiosError } from 'axios';
import * as argon2 from 'argon2';
import { PrismaClient } from '@velue/shared-data-access';

// There's no API to adjust a customer's coin balance directly (buying coins goes
// through Stripe) so test fixtures write it straight to the DB.
const prisma = new PrismaClient();

// /auth/register only ever creates CUSTOMER accounts (role isn't a client-settable
// field - reasonably so, since a public signup endpoint shouldn't let anyone
// self-assign a role). Trainers only ever come from the seed script, so this
// mirrors that same direct-DB approach instead of a registration flow that
// doesn't exist.
async function ensureTestTrainer(email: string, firstName: string, lastName: string): Promise<string> {
  const password = await argon2.hash('Xk9#mQrT2vLp8!Zr');
  const user = await prisma.baseUser.upsert({
    where: { email },
    update: {},
    create: { firstName, lastName, email, password, birthDate: new Date('1985-01-01'), role: 'TRAINER' },
  });

  await prisma.trainer.upsert({
    where: { userId: user.id },
    update: {},
    create: { userId: user.id, certification: 'E2E Test Certified', specialization: ['SPINNING_BEGINNER'] },
  });

  // TrainingSession.trainerId is a foreign key to Trainer.userId, not Trainer's
  // own id - the BaseUser id is what callers need here.
  return user.id;
}

async function adjustCoins(customerId: string, amount: number): Promise<void> {
  await prisma.customer.update({
    where: { id: customerId },
    data: { coins: { increment: amount } },
  });
}

// The customer fixture is a fixed, reused account, so beforeAll needs an
// absolute reset rather than a relative adjustCoins() - otherwise the balance
// silently climbs by 50 on every repeated run against the same database.
async function setCoins(customerId: string, coins: number): Promise<void> {
  await prisma.customer.update({ where: { id: customerId }, data: { coins } });
}

// There's no API to create a training session either - only the seed script
// writes them - so fixtures write directly to the DB here too.
async function createTrainingSession(trainerId: string, coinsRequired: number): Promise<string> {
  // TrainingSession has a unique (date, startTime) constraint, and this runs once
  // per test via beforeEach, so each call needs its own day to avoid colliding.
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7 + Math.floor(Math.random() * 1000));
  futureDate.setHours(0, 0, 0, 0);

  const session = await prisma.trainingSession.create({
    data: {
      trainerId,
      trainingType: 'SPINNING_BEGINNER',
      date: futureDate,
      startTime: 'SLOT_0900',
      durationMinutes: 60,
      maxParticipants: 10,
      coinsRequired,
      qrCode: `E2E-CREATE-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    },
  });
  return session.id;
}

describe('Training Sessions Booking E2E - Create Booking', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let trainerId: string;
  let trainingSessionId: string;

  const testCustomer = {
    email: 'test-customer@example.com',
    password: 'Xk9#mQrT2vLp8!Zr',
    firstName: 'Test',
    lastName: 'Customer',
    birthDate: '1990-01-01',
    acceptsTerms: true,
    acceptsPrivacy: true,
    acceptsMarketing: false,
  };

  const testTrainer = {
    email: 'test-trainer@example.com',
    password: 'Xk9#mQrT2vLp8!Zr',
    firstName: 'Test',
    lastName: 'Trainer',
    birthDate: '1985-01-01',
    acceptsTerms: true,
    acceptsPrivacy: true,
    acceptsMarketing: false,
  };

  beforeAll(async () => {
    // /auth/register doesn't accept a role field (it only ever creates customers)
    // and its response has no nested customer object, so the actual profile -
    // including the customer id booking needs - comes from /user/me afterward.
    try {
      const registerResponse = await axios.post('/api/auth/register', testCustomer);
      authToken = registerResponse.data.tokens.accessToken;
    } catch {
      const loginResponse = await axios.post('/api/auth/login', {
        email: testCustomer.email,
        password: testCustomer.password,
      });
      authToken = loginResponse.data.accessToken;
    }

    const me = await axios.get('/api/user/me', { headers: { Authorization: `Bearer ${authToken}` } });
    userId = me.data.id;
    customerId = me.data.customer.id;

    trainerId = await ensureTestTrainer(testTrainer.email, testTrainer.firstName, testTrainer.lastName);

    await setCoins(customerId, 50);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    trainingSessionId = await createTrainingSession(trainerId, 5);
  });

  it('should create a booking successfully', async () => {
    const response = await axios.post(
      '/api/booking',
      { trainingSessionId },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.userId).toBe(userId);
    expect(response.data.trainingSessionId).toBe(trainingSessionId);
    expect(response.data.status).toBe('CONFIRMED');
    expect(response.data.coinsUsed).toBe(5);
  });

  it('should return 400 when trying to book the same session twice', async () => {
    await axios.post(
      '/api/booking',
      { trainingSessionId },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    try {
      await axios.post(
        '/api/booking',
        { trainingSessionId },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      fail('Should have thrown an error');
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      expect(axiosError.response?.status).toBe(400);
      expect(axiosError.response?.data.message).toContain('Already booked');
    }
  });

  it('should return 400 when user has insufficient coins', async () => {
    await adjustCoins(customerId, -50);

    try {
      await axios.post(
        '/api/booking',
        { trainingSessionId },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      fail('Should have thrown an error');
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      expect(axiosError.response?.status).toBe(400);
      expect(axiosError.response?.data.message).toContain('Insufficient coins');
    }

    await adjustCoins(customerId, 50);
  });

  it('should return 401 when not authenticated', async () => {
    try {
      await axios.post('/api/booking', { trainingSessionId });
      fail('Should have thrown an error');
    } catch (error) {
      const axiosError = error as AxiosError;
      expect(axiosError.response?.status).toBe(401);
    }
  });
});
