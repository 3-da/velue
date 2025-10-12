import { Test, TestingModule } from '@nestjs/testing';
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

describe('StripeService', () => {
  let service: StripeService;
  let prismaService: PrismaService;
  let coinsService: CoinsService;

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

    service = module.get<StripeService>(StripeService);
    prismaService = module.get<PrismaService>(PrismaService);
    coinsService = module.get<CoinsService>(CoinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
