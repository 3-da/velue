import axios, { AxiosError } from 'axios';
import * as argon2 from 'argon2';
import { PrismaClient } from '@velocity/shared-data-access';

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
      qrCode: `E2E-CANCEL-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    },
  });
  return session.id;
}

describe('Training Sessions Booking E2E - Cancel Booking', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let trainerId: string;
  let bookingId: string;

  const testCustomer = {
    email: 'test-customer-cancel@example.com',
    password: 'Xk9#mQrT2vLp8!Zr',
    firstName: 'Test',
    lastName: 'Customer',
    birthDate: '1990-01-01',
    acceptsTerms: true,
    acceptsPrivacy: true,
    acceptsMarketing: false,
  };

  const testTrainer = {
    email: 'test-trainer-cancel@example.com',
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
    const trainingSessionId = await createTrainingSession(trainerId, 5);

    const bookingResponse = await axios.post(
      '/api/booking',
      { trainingSessionId },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    bookingId = bookingResponse.data.id;
  });

  it('should cancel booking successfully when >24 hours before session', async () => {
    const response = await axios.delete(`/api/booking/${bookingId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    expect(response.status).toBe(200);
  });

  it('should return 400 when trying to cancel non-existent booking', async () => {
    try {
      await axios.delete('/api/booking/non-existent-id', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      fail('Should have thrown an error');
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      expect(axiosError.response?.status).toBe(400);
      expect(axiosError.response?.data.message).toContain('not found');
    }
  });

  it('should return 401 when not authenticated', async () => {
    try {
      await axios.delete(`/api/booking/${bookingId}`);
      fail('Should have thrown an error');
    } catch (error) {
      const axiosError = error as AxiosError;
      expect(axiosError.response?.status).toBe(401);
    }
  });
});
