import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CustomerService } from '../customer/customer.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { EmailService } from '../email/email.service';

describe('AuthService', () => {
  let service: AuthService;

  const mockUserService = {
    findByEmail: jest.fn(),
    findById: jest.fn(),
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
    $transaction: jest.fn(async (callback) => {
      const tx = {
        userConsent: {
          create: jest.fn(),
        },
      };
      return callback(tx);
    }),
  };

  const mockJwtService = {
    generateTokenPair: jest.fn(),
    decodeRefreshToken: jest.fn(),
    rotateRefreshToken: jest.fn(),
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

  beforeEach(async () => {
    jest.clearAllMocks(); // The mock objects above are shared across every test in this file.

    const module: TestingModule = await Test.createTestingModule({
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
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('refreshToken', () => {
    const refreshToken = 'valid-refresh-token';
    const decoded = { sub: 'user-123', email: 'user@example.com', role: 'CUSTOMER', exp: 1893456000 };

    it('should rotate the token and issue a new pair for an active user', async () => {
      mockJwtService.decodeRefreshToken.mockResolvedValue(decoded);
      mockUserService.findById.mockResolvedValue({ id: decoded.sub, email: decoded.email, role: decoded.role, isActive: true });
      mockJwtService.generateTokenPair.mockResolvedValue({ accessToken: 'a', refreshToken: 'b', expiresIn: 900 });

      await service.refreshToken({ refreshToken });

      expect(mockJwtService.rotateRefreshToken).toHaveBeenCalledWith(refreshToken, decoded.exp);
      expect(mockJwtService.generateTokenPair).toHaveBeenCalledWith({
        id: decoded.sub,
        email: decoded.email,
        role: decoded.role,
      });
    });

    it('should reject when the token itself is invalid or expired', async () => {
      mockJwtService.decodeRefreshToken.mockRejectedValue(new Error('Invalid or expired refresh token'));

      await expect(service.refreshToken({ refreshToken })).rejects.toThrow();
      expect(mockUserService.findById).not.toHaveBeenCalled();
    });

    it('should reject when the user has been deactivated since the token was issued', async () => {
      mockJwtService.decodeRefreshToken.mockResolvedValue(decoded);
      mockUserService.findById.mockResolvedValue({ id: decoded.sub, email: decoded.email, role: decoded.role, isActive: false });

      await expect(service.refreshToken({ refreshToken })).rejects.toThrow('Invalid credentials');
      expect(mockJwtService.rotateRefreshToken).not.toHaveBeenCalled();
      expect(mockJwtService.generateTokenPair).not.toHaveBeenCalled();
    });

    it('should reject when the user no longer exists', async () => {
      mockJwtService.decodeRefreshToken.mockResolvedValue(decoded);
      mockUserService.findById.mockResolvedValue(null);

      await expect(service.refreshToken({ refreshToken })).rejects.toThrow('Invalid credentials');
      expect(mockJwtService.generateTokenPair).not.toHaveBeenCalled();
    });
  });
});
