import { Test, TestingModule } from '@nestjs/testing';
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

  beforeEach(async () => {
    process.env.STRIPE_SECRET_KEY = 'sk_test_mock_key';
    process.env.FRONTEND_URL = 'http://localhost:4200';

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
      ],
    }).compile();

    controller = module.get<StripeController>(StripeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
