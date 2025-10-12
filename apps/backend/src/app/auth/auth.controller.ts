import { Body, Controller, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { CookieService } from './services/cookie.service';
import { LoginDto } from './dto/login.dto';
import { RegisterCustomerDto } from '../customer/dto/register-customer.dto';
import { RegisterCustomerResponseDto } from '../customer/dto/register-customer-response.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { TokenPair } from '@velue/shared-models';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly cookieService: CookieService) {}

  @Post('register')
  @Throttle({ short: { limit: 1, ttl: 2000 }, long: { limit: 3, ttl: 3600000 } }) // 1 per 2 seconds, 3 per hour
  async register(
    @Body() registerDto: RegisterCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<RegisterCustomerResponseDto> {
    const result = await this.authService.register(registerDto);
    this.cookieService.setAuthCookies(res, result.tokens);

    return result;
  }

  @Post('login')
  @Throttle({ short: { limit: 1, ttl: 1000 }, medium: { limit: 5, ttl: 60000 } }) // 1 per second, 5 per minute
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response): Promise<TokenPair> {
    const tokens = await this.authService.login(loginDto);
    this.cookieService.setAuthCookies(res, tokens);

    return tokens;
  }

  @Post('refresh')
  @Throttle({ medium: { limit: 10, ttl: 60000 } }) // 10 per minute
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<{ message: string }> {
    const { refreshToken } = this.cookieService.getTokenFromCookies(req);
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }

    const tokens = await this.authService.refreshToken({ refreshToken });
    this.cookieService.setAuthCookies(res, tokens);
    return { message: 'Token refreshed successfully' };
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<{ message: string }> {
    const { refreshToken } = this.cookieService.getTokenFromCookies(req);
    if (refreshToken) {
      await this.authService.logout(refreshToken);
    }
    this.cookieService.clearAuthCookies(res);
    return { message: 'Logout successful' };
  }

  @Put('update-password')
  @UseGuards(JwtAuthGuard)
  @Throttle({ short: { limit: 3, ttl: 60000 } }) // 3 per minute
  async updatePassword(@Req() req: Request, @Body() updatePasswordDto: UpdatePasswordDto): Promise<{ message: string }> {
    const user = req.user as { id: string; email: string; role: string };
    await this.authService.updatePassword(user.id, updatePasswordDto);
    return { message: 'Password updated successfully' };
  }

  @Post('forgot-password')
  @Throttle({ short: { limit: 1, ttl: 60000 }, long: { limit: 3, ttl: 3600000 } }) // 1 per minute, 3 per hour
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto): Promise<{ message: string }> {
    await this.authService.forgotPassword(forgotPasswordDto.email);
    return { message: 'If an account with that email exists, a password reset link has been sent.' };
  }

  @Post('reset-password')
  @Throttle({ short: { limit: 3, ttl: 60000 } }) // 3 per minute
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto): Promise<{ message: string }> {
    await this.authService.resetPassword(resetPasswordDto.token, resetPasswordDto.newPassword);
    return { message: 'Password has been reset successfully. You can now log in with your new password.' };
  }
}
