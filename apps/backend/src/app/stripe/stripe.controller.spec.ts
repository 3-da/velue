import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { PrismaService } from '../prisma/prisma.service';
import { CoinsService } from '../coins/coins.service';

// Mock Stripe
jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    checkout: {
      sessions: {
        create: jest.fn(),
        retrieve: jest.fn(),
      },
    },
  }));
});

describe('StripeController', () => {
  let controller: StripeController;

  const mockPrismaService = {
    coinsPackage: {
      findFirst: jest.fn(),
    },
  };

  const mockCoinsService = {
    buyCoins: jest.fn(),
  };

  const configValues: Record<string, string> = {
    STRIPE_SECRET_KEY: 'sk_test_mock_key',
    FRONTEND_URL: 'http://localhost:4200',
  };

  const mockConfigService = {
    get: jest.fn((key: string) => configValues[key]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StripeController],
      providers: [
        StripeService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: CoinsService,
          useValue: mockCoinsService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    controller = module.get<StripeController>(StripeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
