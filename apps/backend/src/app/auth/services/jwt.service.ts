import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserRole } from '@velue/shared-data-access';
import { JwtPayload, TokenPair } from '@velue/shared-models';

@Injectable()
export class JwtService {
  private revokedTokens = new Map<string, number>(); // Use Map to store token -> expiry timestamp for TTL-based cleanup

  constructor(private jwtService: NestJwtService, private configService: ConfigService) {
    setInterval(() => this.cleanupExpiredTokens(), 5 * 60 * 1000); // Start cleanup interval every 5 minutes
  }

  async generateTokenPair(user: { id: string; email: string; role: UserRole }): Promise<TokenPair> {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: this.configService.get('JWT_EXPIRATION', '15m'),
      }),
      this.jwtService.signAsync(
        { ...payload, type: 'refresh' },
        {
          expiresIn: this.configService.get('JWT_REFRESH_EXPIRATION', '7d'),
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
      expiresIn: 15 * 60, // 15 minutes in seconds
    };
  }

  async refreshAccessToken(refreshToken: string): Promise<TokenPair> {
    if (this.revokedTokens.has(refreshToken)) {
      throw new UnauthorizedException('Token has been revoked');
    }

    const decoded = await this.jwtService.verifyAsync(refreshToken);

    if (decoded.type !== 'refresh') {
      throw new UnauthorizedException('Invalid token type');
    }

    // Token rotation for security - revoke old refresh token with expiry time
    const expiryTime = decoded.exp * 1000; // Convert to milliseconds
    this.revokedTokens.set(refreshToken, expiryTime);

    return this.generateTokenPair({
      id: decoded.sub,
      email: decoded.email,
      role: decoded.role,
    });
  }

  async revokeRefreshToken(refreshToken: string): Promise<void> {
    try {
      const decoded = await this.jwtService.verifyAsync(refreshToken);
      const expiryTime = decoded.exp * 1000; // Convert to milliseconds
      this.revokedTokens.set(refreshToken, expiryTime);
    } catch (error: unknown) {
      // If token is invalid, still add it to blacklist with a default TTL
      const defaultExpiry = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
      this.revokedTokens.set(refreshToken, defaultExpiry);
      console.error(error);
    }
  }

  private cleanupExpiredTokens(): void {
    const now = Date.now();
    let cleanedCount = 0;

    for (const [token, expiry] of this.revokedTokens.entries()) {
      if (expiry < now) {
        this.revokedTokens.delete(token);
        cleanedCount++;
      }
    }

    if (cleanedCount > 0) {
      console.log(
        `Cleaned up ${cleanedCount} expired revoked tokens. Current blacklist size: ${this.revokedTokens.size}`,
      );
    }
  }
}
