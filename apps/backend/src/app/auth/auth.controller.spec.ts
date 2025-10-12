import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CustomerService } from '../customer/customer.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { EmailService } from '../email/email.service';
import { CookieService } from './services/cookie.service';

describe('AuthController', () => {
  let controller: AuthController;

  const mockUserService = {
    findByEmail: jest.fn(),
    updateLastLogin: jest.fn(),
  };

  const mockCustomerService = {
    registerCustomer: jest.fn(),
  };

  const mockPrismaService = {
    baseUser: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    userConsent: {
      create: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  const mockJwtService = {
    generateTokenPair: jest.fn(),
    refreshAccessToken: jest.fn(),
    revokeRefreshToken: jest.fn(),
  };

  const mockPasswordService = {
    validatePasswordStrength: jest.fn(),
    hashPassword: jest.fn(),
    verifyPassword: jest.fn(),
  };

  const mockEmailService = {
    sendPasswordChangedEmail: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  };

  const mockCookieService = {
    setAuthCookies: jest.fn(),
    getTokenFromCookies: jest.fn(),
    clearAuthCookies: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: CustomerService,
          useValue: mockCustomerService,
        },
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: PasswordService,
          useValue: mockPasswordService,
        },
        {
          provide: EmailService,
          useValue: mockEmailService,
        },
        {
          provide: CookieService,
          useValue: mockCookieService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
