import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomerService } from '../../customer/customer.service';
import { TrainingSessionsService } from '../training-sessions.service';
import { BadRequestException } from '@nestjs/common';
import { TRAINING_SESSION } from '@velue/shared-constants';
import { Booking, TrainingSession } from '@velue/shared-data-access';

type MockedPrismaService = {
  booking: {
    create: jest.Mock;
    findFirst: jest.Mock;
    findUnique: jest.Mock;
    delete: jest.Mock;
  };
  $transaction: jest.Mock;
};

type MockedCustomerService = {
  hasEnoughCoins: jest.Mock<Promise<boolean>>;
  deductCoins: jest.Mock<Promise<void>>;
  addCoins: jest.Mock<Promise<void>>;
};

type MockedTrainingSessionsService = {
  canBeBooked: jest.Mock<Promise<boolean>>;
  getSessionDateTime: jest.Mock<Date>;
};

type PrismaTransactionClient = Omit<
  PrismaService,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$extends'
>;

describe('BookingService', () => {
  let service: BookingService;
  let prismaService: MockedPrismaService;
  let customerService: MockedCustomerService;
  let trainingSessionsService: MockedTrainingSessionsService;

  const mockBooking: Booking = {
    id: 'booking-123',
    userId: 'user-123',
    trainingSessionId: 'session-123',
    status: 'CONFIRMED',
    coinsUsed: 5,
    bookedAt: new Date(),
    cancelledAt: null,
    attendedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockTrainingSession: TrainingSession = {
    id: 'session-123',
    status: 'SCHEDULED',
    createdAt: new Date(),
    updatedAt: new Date(),
    trainerId: 'trainer-123',
    trainingType: 'SPINNING_BEGINNER',
    date: new Date('2025-12-01'),
    startTime: 'SLOT_0900',
    durationMinutes: 60,
    maxParticipants: 10,
    coinsRequired: 5,
    qrCode: 'test-qr-code',
  };

  beforeEach(async () => {
    const mockPrismaService: MockedPrismaService = {
      booking: {
        create: jest.fn(),
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        delete: jest.fn(),
      },
      $transaction: jest.fn(),
    };

    const mockCustomerServiceImpl: MockedCustomerService = {
      hasEnoughCoins: jest.fn(),
      deductCoins: jest.fn(),
      addCoins: jest.fn(),
    };

    const mockTrainingSessionsServiceImpl: MockedTrainingSessionsService = {
      canBeBooked: jest.fn(),
      getSessionDateTime: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: CustomerService, useValue: mockCustomerServiceImpl },
        { provide: TrainingSessionsService, useValue: mockTrainingSessionsServiceImpl },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
    prismaService = module.get(PrismaService) as unknown as MockedPrismaService;
    customerService = module.get(CustomerService) as unknown as MockedCustomerService;
    trainingSessionsService = module.get(TrainingSessionsService) as unknown as MockedTrainingSessionsService;
  });

  describe('createBooking', () => {
    const createBookingDto = {
      trainingSessionId: 'session-123',
      userId: 'user-123',
    };

    it('should create a booking successfully when all conditions are met', async () => {
      trainingSessionsService.canBeBooked.mockResolvedValue(true);
      customerService.hasEnoughCoins.mockResolvedValue(true);
      prismaService.booking.findFirst.mockResolvedValue(null);

      prismaService.$transaction.mockImplementation(
        async (callback: (tx: PrismaTransactionClient) => Promise<Booking>) => {
          const tx = {
            booking: {
              create: jest.fn().mockResolvedValue(mockBooking),
            },
          } as unknown as PrismaTransactionClient;
          return callback(tx);
        }
      );

      const result = await service.createBooking(createBookingDto);

      expect(result).toEqual(mockBooking);
      expect(trainingSessionsService.canBeBooked).toHaveBeenCalledWith('session-123');
      expect(customerService.hasEnoughCoins).toHaveBeenCalledWith('user-123', TRAINING_SESSION.coinsRequired);
      expect(customerService.deductCoins).toHaveBeenCalledWith('user-123', TRAINING_SESSION.coinsRequired, expect.anything());
    });

    it('should throw BadRequestException when session cannot be booked', async () => {
      trainingSessionsService.canBeBooked.mockResolvedValue(false);

      await expect(service.createBooking(createBookingDto)).rejects.toThrow(
        new BadRequestException('Cannot be booked')
      );

      expect(customerService.hasEnoughCoins).not.toHaveBeenCalled();
    });

    it('should throw BadRequestException when user has insufficient coins', async () => {
      trainingSessionsService.canBeBooked.mockResolvedValue(true);
      customerService.hasEnoughCoins.mockResolvedValue(false);

      await expect(service.createBooking(createBookingDto)).rejects.toThrow(
        new BadRequestException('Insufficient coins')
      );

      expect(prismaService.booking.findFirst).not.toHaveBeenCalled();
    });

    it('should throw BadRequestException when user already has a booking', async () => {
      trainingSessionsService.canBeBooked.mockResolvedValue(true);
      customerService.hasEnoughCoins.mockResolvedValue(true);
      prismaService.booking.findFirst.mockResolvedValue(mockBooking);

      await expect(service.createBooking(createBookingDto)).rejects.toThrow(
        new BadRequestException('Already booked')
      );

      expect(prismaService.$transaction).not.toHaveBeenCalled();
    });
  });

  describe('removeBooking', () => {
    const bookingId = 'booking-123';

    it('should cancel booking and refund coins when cancellation is >24h before session', async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 3);

      const bookingWithSession = {
        ...mockBooking,
        trainingSession: {
          ...mockTrainingSession,
          date: futureDate,
        },
      };

      prismaService.booking.findUnique.mockResolvedValue(bookingWithSession);
      trainingSessionsService.getSessionDateTime.mockReturnValue(
        new Date(futureDate.getTime() + 10 * 60 * 60 * 1000)
      );

      prismaService.$transaction.mockImplementation(
        async (callback: (tx: PrismaTransactionClient) => Promise<void>) => {
          const tx = {
            booking: {
              delete: jest.fn().mockResolvedValue(mockBooking),
            },
          } as unknown as PrismaTransactionClient;
          return callback(tx);
        }
      );

      await service.removeBooking(bookingId);

      expect(prismaService.booking.findUnique).toHaveBeenCalledWith({
        where: { id: bookingId },
        include: { trainingSession: true },
      });
      expect(customerService.addCoins).toHaveBeenCalledWith('user-123', 5, expect.anything());
    });

    it('should throw BadRequestException when booking not found', async () => {
      prismaService.booking.findUnique.mockResolvedValue(null);

      await expect(service.removeBooking(bookingId)).rejects.toThrow(
        new BadRequestException('Booking not found')
      );

      expect(customerService.addCoins).not.toHaveBeenCalled();
    });

    it('should throw BadRequestException when cancellation is <24h before session', async () => {
      const soonDate = new Date();
      soonDate.setHours(soonDate.getHours() + 12);

      const bookingWithSession = {
        ...mockBooking,
        trainingSession: {
          ...mockTrainingSession,
          date: soonDate,
        },
      };

      prismaService.booking.findUnique.mockResolvedValue(bookingWithSession);
      trainingSessionsService.getSessionDateTime.mockReturnValue(soonDate);

      await expect(service.removeBooking(bookingId)).rejects.toThrow(
        new BadRequestException('Cancellation must be made at least 24 hours in advance')
      );

      expect(customerService.addCoins).not.toHaveBeenCalled();
    });

    it('should accept cancellation exactly at 24h boundary', async () => {
      const exactDate = new Date();
      exactDate.setHours(exactDate.getHours() + 24);
      exactDate.setSeconds(exactDate.getSeconds() + 1); // Add 1 second buffer for execution time

      const bookingWithSession = {
        ...mockBooking,
        trainingSession: {
          ...mockTrainingSession,
          date: exactDate,
        },
      };

      prismaService.booking.findUnique.mockResolvedValue(bookingWithSession);
      trainingSessionsService.getSessionDateTime.mockReturnValue(exactDate);

      prismaService.$transaction.mockImplementation(
        async (callback: (tx: PrismaTransactionClient) => Promise<void>) => {
          const tx = {
            booking: {
              delete: jest.fn().mockResolvedValue(mockBooking),
            },
          } as unknown as PrismaTransactionClient;
          return callback(tx);
        }
      );

      await expect(service.removeBooking(bookingId)).resolves.not.toThrow();

      expect(customerService.addCoins).toHaveBeenCalledWith('user-123', 5, expect.anything());
    });
  });
});
