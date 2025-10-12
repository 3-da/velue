import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSessionsController } from './training-sessions.controller';
import { TrainingSessionsService } from './training-sessions.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TrainingSessionsController', () => {
  let controller: TrainingSessionsController;

  const mockPrismaService = {
    trainingSession: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingSessionsController],
      providers: [
        TrainingSessionsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<TrainingSessionsController>(TrainingSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
