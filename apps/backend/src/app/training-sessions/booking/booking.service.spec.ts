import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import { PrismaService } from '../../prisma/prisma.service';
import { TrainingSessionsService } from '../training-sessions.service';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { TRAINING_SESSION } from '@velue/shared-constants';
import { Booking, TrainingSession } from '@velue/shared-data-access';

type TransactionMock = {
  $queryRaw: jest.Mock;
  booking: { count: jest.Mock; findFirst: jest.Mock; create: jest.Mock; deleteMany: jest.Mock };
  customer: { updateMany: jest.Mock; findUniqueOrThrow: jest.Mock; update: jest.Mock };
  coinsTransaction: { create: jest.Mock };
};

type MockedPrismaService = {
  booking: { findUnique: jest.Mock };
  $transaction: jest.Mock;
};

type MockedTrainingSessionsService = {
  getSessionDateTime: jest.Mock<Date>;
};

describe('BookingService', () => {
  let service: BookingService;
  let prismaService: MockedPrismaService;
  let trainingSessionsService: MockedTrainingSessionsService;
  let tx: TransactionMock;

  const userId = 'user-123';

  const mockBooking: Booking = {
    id: 'booking-123',
    userId,
    trainingSessionId: 'session-123',
    status: 'CONFIRMED',
    coinsUsed: TRAINING_SESSION.coinsRequired,
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
    coinsRequired: TRAINING_SESSION.coinsRequired,
    qrCode: 'test-qr-code',
  };

  beforeEach(async () => {
    tx = {
      $queryRaw: jest.fn(),
      booking: { count: jest.fn(), findFirst: jest.fn(), create: jest.fn(), deleteMany: jest.fn() },
      customer: { updateMany: jest.fn(), findUniqueOrThrow: jest.fn(), update: jest.fn() },
      coinsTransaction: { create: jest.fn() },
    };

    const mockPrismaService: MockedPrismaService = {
      booking: { findUnique: jest.fn() },
      // Every transaction runs against the same configurable tx mock.
      $transaction: jest.fn().mockImplementation((callback: (client: TransactionMock) => unknown) => callback(tx)),
    };

    const mockTrainingSessionsServiceImpl: MockedTrainingSessionsService = {
      getSessionDateTime: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: TrainingSessionsService, useValue: mockTrainingSessionsServiceImpl },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
    prismaService = module.get(PrismaService) as unknown as MockedPrismaService;
    trainingSessionsService = module.get(TrainingSessionsService) as unknown as MockedTrainingSessionsService;
  });

  describe('createBooking', () => {
    const createBookingDto = { trainingSessionId: 'session-123' };

    function arrangeBookableSession(coinsRequired: number = TRAINING_SESSION.coinsRequired): void {
      tx.$queryRaw.mockResolvedValue([{ status: 'SCHEDULED', maxParticipants: 10, coinsRequired }]);
      tx.booking.count.mockResolvedValue(3);
      tx.booking.findFirst.mockResolvedValue(null);
      tx.customer.updateMany.mockResolvedValue({ count: 1 });
      tx.customer.findUniqueOrThrow.mockResolvedValue({ coins: 90 });
      tx.booking.create.mockResolvedValue(mockBooking);
      tx.coinsTransaction.create.mockResolvedValue({});
    }

    it('should create a booking, deduct coins atomically and write an audit record', async () => {
      arrangeBookableSession();

      const result = await service.createBooking(createBookingDto, userId);

      expect(result).toEqual(mockBooking);
      expect(tx.customer.updateMany).toHaveBeenCalledWith({
        where: { userId, coins: { gte: TRAINING_SESSION.coinsRequired } },
        data: { coins: { decrement: TRAINING_SESSION.coinsRequired } },
      });
      expect(tx.coinsTransaction.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ type: 'BOOKING_CHARGE', balanceAfter: 90 }) }),
      );
      expect(tx.$queryRaw).toHaveBeenCalled(); // Row lock taken before the capacity count.
    });

    it('should throw when the session is full', async () => {
      tx.$queryRaw.mockResolvedValue([{ status: 'SCHEDULED', maxParticipants: 10 }]);
      tx.booking.count.mockResolvedValue(10);

      await expect(service.createBooking(createBookingDto, userId)).rejects.toThrow(
        new BadRequestException('Cannot be booked'),
      );
      expect(tx.customer.updateMany).not.toHaveBeenCalled();
    });

    it('should throw when the session is not SCHEDULED', async () => {
      tx.$queryRaw.mockResolvedValue([{ status: 'CANCELLED', maxParticipants: 10 }]);

      await expect(service.createBooking(createBookingDto, userId)).rejects.toThrow(
        new BadRequestException('Cannot be booked'),
      );
    });

    it('should throw when the session does not exist', async () => {
      tx.$queryRaw.mockResolvedValue([]);

      await expect(service.createBooking(createBookingDto, userId)).rejects.toThrow(
        new BadRequestException('Cannot be booked'),
      );
    });

    it('should throw when the user already has an active booking', async () => {
      tx.$queryRaw.mockResolvedValue([{ status: 'SCHEDULED', maxParticipants: 10 }]);
      tx.booking.count.mockResolvedValue(3);
      tx.booking.findFirst.mockResolvedValue(mockBooking);

      await expect(service.createBooking(createBookingDto, userId)).rejects.toThrow(
        new BadRequestException('Already booked'),
      );
      expect(tx.customer.updateMany).not.toHaveBeenCalled();
    });

    it('should throw when the balance cannot cover the cost', async () => {
      arrangeBookableSession();
      tx.customer.updateMany.mockResolvedValue({ count: 0 });

      await expect(service.createBooking(createBookingDto, userId)).rejects.toThrow(
        new BadRequestException('Insufficient coins'),
      );
      expect(tx.booking.create).not.toHaveBeenCalled();
    });

    it('should charge the session own price, not the global default', async () => {
      arrangeBookableSession(5);

      await service.createBooking(createBookingDto, userId);

      expect(tx.customer.updateMany).toHaveBeenCalledWith({
        where: { userId, coins: { gte: 5 } },
        data: { coins: { decrement: 5 } },
      });
      expect(tx.booking.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ coinsUsed: 5 }) }),
      );
    });

    it('should return 400 instead of a raw 500 when a concurrent request wins the race', async () => {
      arrangeBookableSession();
      tx.booking.create.mockRejectedValue(Object.assign(new Error('Unique constraint failed'), { code: 'P2002' }));

      await expect(service.createBooking(createBookingDto, userId)).rejects.toThrow(
        new BadRequestException('Already booked'),
      );
    });
  });

  describe('removeBooking', () => {
    const bookingId = 'booking-123';

    function bookingDueIn(hours: number): void {
      const sessionDateTime = new Date(Date.now() + hours * 60 * 60 * 1000);
      prismaService.booking.findUnique.mockResolvedValue({ ...mockBooking, trainingSession: mockTrainingSession });
      trainingSessionsService.getSessionDateTime.mockReturnValue(sessionDateTime);
    }

    it('should delete the booking, refund coins and record a refund transaction', async () => {
      bookingDueIn(72);
      tx.booking.deleteMany.mockResolvedValue({ count: 1 });
      tx.customer.update.mockResolvedValue({ coins: 100 });

      await service.removeBooking(bookingId, userId);

      expect(tx.booking.deleteMany).toHaveBeenCalledWith({ where: { id: bookingId } });
      expect(tx.customer.update).toHaveBeenCalledWith({
        where: { userId },
        data: { coins: { increment: mockBooking.coinsUsed } },
      });
      expect(tx.coinsTransaction.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ type: 'BOOKING_REFUND', balanceAfter: 100 }) }),
      );
    });

    it('should throw when the booking does not exist', async () => {
      prismaService.booking.findUnique.mockResolvedValue(null);

      await expect(service.removeBooking(bookingId, userId)).rejects.toThrow(
        new BadRequestException('Booking not found'),
      );
    });

    it('should forbid cancelling another user booking', async () => {
      bookingDueIn(72);

      await expect(service.removeBooking(bookingId, 'someone-else')).rejects.toThrow(
        new ForbiddenException('You can only cancel your own bookings'),
      );
      expect(prismaService.$transaction).not.toHaveBeenCalled();
    });

    it('should throw when cancelling inside the advance window', async () => {
      bookingDueIn(12);

      await expect(service.removeBooking(bookingId, userId)).rejects.toThrow(BadRequestException);
      expect(prismaService.$transaction).not.toHaveBeenCalled();
    });

    it('should throw when a concurrent cancellation already removed the booking', async () => {
      bookingDueIn(72);
      tx.booking.deleteMany.mockResolvedValue({ count: 0 });

      await expect(service.removeBooking(bookingId, userId)).rejects.toThrow(
        new BadRequestException('Booking already cancelled'),
      );
      expect(tx.customer.update).not.toHaveBeenCalled();
    });
  });
});
