import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
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

  const configValues: Record<string, string> = {
    STRIPE_SECRET_KEY: 'sk_test_mock_key',
    FRONTEND_URL: 'http://localhost:4200',
  };

  const mockConfigService = {
    get: jest.fn((key: string) => configValues[key]),
  };

  beforeEach(async () => {
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
        {
          provide: ConfigService,
          useValue: mockConfigService,
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

  it('should build checkout URLs from the configured FRONTEND_URL', async () => {
    const mockCreate = jest.fn().mockResolvedValue({ url: 'https://checkout.stripe.com/session' });
    (service as unknown as { stripe: { checkout: { sessions: { create: jest.Mock } } } }).stripe.checkout.sessions.create =
      mockCreate;

    await service.createCheckoutSession('price_123', 'user-123');

    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        success_url: 'http://localhost:4200/training-sessions?payment=success&session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:4200/pricing',
      }),
    );
  });
});
