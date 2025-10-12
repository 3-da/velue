import { Test, TestingModule } from '@nestjs/testing';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CoinsController', () => {
  let controller: CoinsController;

  const mockPrismaService = {
    customer: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    coinsTransaction: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoinsController],
      providers: [
        CoinsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<CoinsController>(CoinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
