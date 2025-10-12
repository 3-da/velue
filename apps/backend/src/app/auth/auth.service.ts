import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CustomerService } from '../customer/customer.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { LoginDto } from './dto/login.dto';
import { RegisterCustomerDto } from '../customer/dto/register-customer.dto';
import { RegisterCustomerResponseDto } from '../customer/dto/register-customer-response.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { TokenPair, UserWithAllRoles } from '@velue/shared-models';
import { ConsentType } from '@velue/shared-data-access';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly customerService: CustomerService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
    private readonly emailService: EmailService,
  ) {}

  async register(registerDto: RegisterCustomerDto): Promise<RegisterCustomerResponseDto> {
    const { firstName, lastName, password } = registerDto;

    const passwordValidation = this.passwordService.validatePasswordStrength(password, {
      firstName,
      lastName,
      email: registerDto.email,
    });

    if (!passwordValidation.isValid) {
      throw new ConflictException(`Password validation failed: ${passwordValidation.errors[0]}`);
    }

    // Check if user already exists
    const existingUser = await this.userService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('Registration could not be completed. Please check your information and try again.');
    }

    const hashedPassword = await this.passwordService.hashPassword(password);

    try {
      const user = await this.prisma.$transaction(async tx => {
        // Register customer (includes BaseUser creation)
        const customer = await this.customerService.registerCustomer({
          ...registerDto,
          password: hashedPassword,
        }, tx);

        // Create consents
        const consents = [
          { consentType: ConsentType.TERMS_OF_SERVICE, granted: registerDto.acceptsTerms },
          { consentType: ConsentType.PRIVACY_POLICY, granted: registerDto.acceptsPrivacy },
          { consentType: ConsentType.MARKETING_COMMUNICATIONS, granted: registerDto.acceptsMarketing },
        ];

        for (const consent of consents) {
          await tx.userConsent.create({
            data: {
              userId: customer.id,
              consentType: consent.consentType,
              granted: consent.granted,
            },
          });
        }

        return customer;
      });

      const tokens = await this.jwtService.generateTokenPair({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return new RegisterCustomerResponseDto(
        {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        },
        tokens,
      );
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          'Registration could not be completed. Please check your information and try again.',
        );
      }
      throw error;
    }
  }

  async login(loginDto: LoginDto): Promise<TokenPair> {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.passwordService.verifyPassword(user.password, password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.userService.updateLastLogin(user.id);

    return this.jwtService.generateTokenPair({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto): Promise<TokenPair> {
    const { refreshToken } = refreshTokenDto;
    return this.jwtService.refreshAccessToken(refreshToken);
  }

  async validateUser(email: string, password: string): Promise<UserWithAllRoles | null> {
    const user = await this.userService.findByEmail(email);

    if (!user || !user.isActive) {
      return null;
    }

    const isPasswordValid = await this.passwordService.verifyPassword(user.password, password);

    if (!isPasswordValid) {
      return null;
    }

    await this.userService.updateLastLogin(user.id);
    return user;
  }

  async logout(refreshToken: string): Promise<{ message: string }> {
    await this.jwtService.revokeRefreshToken(refreshToken);
    return { message: 'Logged out successfully' };
  }

  async updatePassword(userId: string, updatePasswordDto: UpdatePasswordDto): Promise<void> {
    const { currentPassword, newPassword } = updatePasswordDto;

    // Get user
    const user = await this.prisma.baseUser.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Prevent password changes for demo accounts
    const demoAccounts = ['test-customer@velue.de', 'test-trainer@velue.de', 'test-admin@velue.de'];
    if (demoAccounts.includes(user.email)) {
      throw new ConflictException(
        'Password cannot be changed for demo accounts. These accounts are shared for testing purposes. Please register a new account to try the password change feature.',
      );
    }

    // Verify current password
    const isPasswordValid = await this.passwordService.verifyPassword(user.password, currentPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    // Validate new password strength
    const passwordValidation = this.passwordService.validatePasswordStrength(newPassword, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    if (!passwordValidation.isValid) {
      throw new ConflictException(`Password validation failed: ${passwordValidation.errors[0]}`);
    }

    // Hash new password
    const hashedPassword = await this.passwordService.hashPassword(newPassword);

    // Update password and timestamp
    await this.prisma.baseUser.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        passwordLastChanged: new Date(),
      },
    });

    // Send confirmation email
    await this.emailService.sendPasswordChangedEmail(
      user.email,
      `${user.firstName} ${user.lastName}`,
    );
  }

  async forgotPassword(email: string): Promise<void> {
    // Find user by email
    const user = await this.prisma.baseUser.findUnique({
      where: { email },
    });

    // Always return success even if user doesn't exist (security best practice)
    if (!user) {
      return;
    }

    // Generate reset token (cryptographically secure random string)
    const crypto = await import('crypto');
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

    // Store token and expiry in database
    await this.prisma.baseUser.update({
      where: { id: user.id },
      data: {
        passwordResetToken: resetToken,
        passwordResetExpiry: resetExpiry,
      },
    });

    // Send reset email
    await this.emailService.sendPasswordResetEmail(
      user.email,
      `${user.firstName} ${user.lastName}`,
      resetToken,
    );
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    // Find user with valid token
    const user = await this.prisma.baseUser.findFirst({
      where: {
        passwordResetToken: token,
        passwordResetExpiry: {
          gt: new Date(), // Token not expired
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    // Validate new password strength
    const passwordValidation = this.passwordService.validatePasswordStrength(newPassword, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    if (!passwordValidation.isValid) {
      throw new ConflictException(`Password validation failed: ${passwordValidation.errors[0]}`);
    }

    // Hash new password
    const hashedPassword = await this.passwordService.hashPassword(newPassword);

    // Update password and clear reset token
    await this.prisma.baseUser.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordLastChanged: new Date(),
        passwordResetToken: null,
        passwordResetExpiry: null,
      },
    });

    // Send confirmation email
    await this.emailService.sendPasswordChangedEmail(
      user.email,
      `${user.firstName} ${user.lastName}`,
    );
  }
}
