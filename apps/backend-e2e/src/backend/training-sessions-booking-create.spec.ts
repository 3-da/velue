import axios, { AxiosError } from 'axios';

describe('Training Sessions Booking E2E - Create Booking', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let trainerId: string;
  let trainingSessionId: string;

  const testCustomer = {
    email: 'test-customer@example.com',
    password: 'Test123!@#',
    firstName: 'Test',
    lastName: 'Customer',
    birthDate: '1990-01-01',
  };

  const testTrainer = {
    email: 'test-trainer@example.com',
    password: 'Test123!@#',
    firstName: 'Test',
    lastName: 'Trainer',
    birthDate: '1985-01-01',
  };

  beforeAll(async () => {
    try {
      const registerResponse = await axios.post('/api/auth/register', {
        ...testCustomer,
        role: 'CUSTOMER',
      });
      userId = registerResponse.data.user.id;
      customerId = registerResponse.data.user.customer.id;
    } catch {
      const loginResponse = await axios.post('/api/auth/login', {
        email: testCustomer.email,
        password: testCustomer.password,
      });
      authToken = loginResponse.data.accessToken;
      userId = loginResponse.data.user.id;
      customerId = loginResponse.data.user.customer.id;
    }

    if (!authToken) {
      const loginResponse = await axios.post('/api/auth/login', {
        email: testCustomer.email,
        password: testCustomer.password,
      });
      authToken = loginResponse.data.accessToken;
      userId = loginResponse.data.user.id;
      customerId = loginResponse.data.user.customer.id;
    }

    try {
      const trainerRegResponse = await axios.post('/api/auth/register', {
        ...testTrainer,
        role: 'TRAINER',
      });
      trainerId = trainerRegResponse.data.user.trainer.id;
    } catch {
      const loginResponse = await axios.post('/api/auth/login', {
        email: testTrainer.email,
        password: testTrainer.password,
      });
      trainerId = loginResponse.data.user.trainer?.id;
    }

    await axios.patch(
      `/api/customer/${customerId}/coins`,
      { amount: 50 },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
  });

  beforeEach(async () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);

    const sessionResponse = await axios.post(
      '/api/training-sessions',
      {
        trainerId,
        trainingType: 'SPINNING_BEGINNER',
        date: futureDate.toISOString().split('T')[0],
        startTime: 'SLOT_0900',
        durationMinutes: 60,
        maxParticipants: 10,
        coinsRequired: 5,
      },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    trainingSessionId = sessionResponse.data.id;
  });

  it('should create a booking successfully', async () => {
    const response = await axios.post(
      '/api/booking',
      {
        trainingSessionId,
        userId,
      },
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
      {
        trainingSessionId,
        userId,
      },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    try {
      await axios.post(
        '/api/booking',
        {
          trainingSessionId,
          userId,
        },
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
    await axios.patch(
      `/api/customer/${customerId}/coins`,
      { amount: -50 },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    try {
      await axios.post(
        '/api/booking',
        {
          trainingSessionId,
          userId,
        },
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

    await axios.patch(
      `/api/customer/${customerId}/coins`,
      { amount: 50 },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
  });

  it('should return 401 when not authenticated', async () => {
    try {
      await axios.post('/api/booking', {
        trainingSessionId,
        userId,
      });
      fail('Should have thrown an error');
    } catch (error) {
      const axiosError = error as AxiosError;
      expect(axiosError.response?.status).toBe(401);
    }
  });
});
