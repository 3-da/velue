import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSessionsService } from './training-sessions.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TrainingSessionsService', () => {
  let service: TrainingSessionsService;
  let prismaService: PrismaService;

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
      providers: [
        TrainingSessionsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<TrainingSessionsService>(TrainingSessionsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
