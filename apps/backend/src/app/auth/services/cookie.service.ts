import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { TokenPair } from '@velue/shared-models';

@Injectable()
export class CookieService {
  constructor(private readonly configService: ConfigService) {}

  private get cookieOptions(): {
    httpOnly: true;
    secure: boolean;
    sameSite: 'none' | 'strict';
    path: '/';
  } {
    const isProduction = this.configService.get('NODE_ENV') === 'production';
    return {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'strict',
      path: '/',
    } as const;
  }

  private get isProduction(): boolean {
    return this.configService.get('NODE_ENV') === 'production';
  }

  /**
   * Helper to set cookie for cross-origin support
   * Uses SameSite=None; Secure for production (cross-origin between Vercel & Railway)
   */
  private setCookieWithPartitioned(
    res: Response,
    name: string,
    value: string,
    options: { maxAge: number; path: string; httpOnly?: boolean },
  ): void {
    if (!this.isProduction) {
      // Development: use standard res.cookie()
      res.cookie(name, value, {
        ...this.cookieOptions,
        ...options,
      });
      return;
    }

    // Production: manually set cookie for cross-origin support (Safari/iOS compatible)
    const maxAgeSeconds = Math.floor(options.maxAge / 1000);
    const httpOnlyFlag = options.httpOnly !== false ? '; HttpOnly' : '';

    const cookieString = `${name}=${value}; Path=${options.path}; Max-Age=${maxAgeSeconds}; SameSite=None; Secure${httpOnlyFlag}`;

    res.append('Set-Cookie', cookieString);
  }

  setAuthCookies(res: Response, tokens: TokenPair): void {
    // Access token cookie (15 minutes)
    this.setCookieWithPartitioned(res, 'access_token', tokens.accessToken, {
      maxAge: 15 * 60 * 1000,
      path: '/',
      httpOnly: true,
    });

    // Refresh token cookie (7 days, limited path)
    this.setCookieWithPartitioned(res, 'refresh_token', tokens.refreshToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/api/auth',
      httpOnly: true,
    });

    // Auth state cookie for frontend (not httpOnly)
    this.setCookieWithPartitioned(res, 'auth_state', 'authenticated', {
      maxAge: 15 * 60 * 1000,
      path: '/',
      httpOnly: false,
    });
  }

  clearAuthCookies(res: Response): void {
    res.clearCookie('access_token', { path: '/' });
    res.clearCookie('refresh_token', { path: '/api/auth' });
    res.clearCookie('auth_state', { path: '/' });
  }

  getTokenFromCookies(req: Request): { accessToken?: string; refreshToken?: string } {
    return {
      accessToken: req.cookies?.access_token,
      refreshToken: req.cookies?.refresh_token,
    };
  }
}
