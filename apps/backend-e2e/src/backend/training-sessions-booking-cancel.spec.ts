import axios, { AxiosError } from 'axios';

describe('Training Sessions Booking E2E - Cancel Booking', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let trainerId: string;
  let bookingId: string;

  const testCustomer = {
    email: 'test-customer-cancel@example.com',
    password: 'Test123!@#',
    firstName: 'Test',
    lastName: 'Customer',
    birthDate: '1990-01-01',
  };

  const testTrainer = {
    email: 'test-trainer-cancel@example.com',
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

    const bookingResponse = await axios.post(
      '/api/booking',
      {
        trainingSessionId: sessionResponse.data.id,
        userId,
      },
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
    expect(response.data).toHaveProperty('message');
    expect(response.data.message).toContain('cancelled');
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
