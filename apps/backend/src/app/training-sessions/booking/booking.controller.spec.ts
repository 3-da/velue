import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { PrismaService } from '../../prisma/prisma.service';
import { TrainingSessionsService } from '../training-sessions.service';

describe('BookingController', () => {
  let controller: BookingController;

  const mockPrismaService = {
    booking: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  const mockTrainingSessionsService = {
    getSessionDateTime: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [
        BookingService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: TrainingSessionsService, useValue: mockTrainingSessionsService },
      ],
    }).compile();

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
