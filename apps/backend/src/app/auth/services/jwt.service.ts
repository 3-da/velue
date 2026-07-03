import { Injectable, Logger, OnModuleDestroy, UnauthorizedException } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserRole } from '@velue/shared-data-access';
import { JwtPayload, TokenPair } from '@velue/shared-models';

@Injectable()
export class JwtService implements OnModuleDestroy {
  private readonly logger = new Logger(JwtService.name);
  private revokedTokens = new Map<string, number>(); // Use Map to store token -> expiry timestamp for TTL-based cleanup
  private readonly cleanupTimer: ReturnType<typeof setInterval>;

  constructor(private jwtService: NestJwtService, private configService: ConfigService) {
    this.cleanupTimer = setInterval(() => this.cleanupExpiredTokens(), 5 * 60 * 1000); // Start cleanup interval every 5 minutes
  }

  // Stop the cleanup timer so the process (and Jest workers) can exit cleanly.
  onModuleDestroy(): void {
    clearInterval(this.cleanupTimer);
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

  // Verifies and decodes a refresh token without issuing anything. Callers that
  // need to re-check the underlying user (refresh) do that between this and
  // rotateRefreshToken; callers that don't (logout) can skip straight to it.
  async decodeRefreshToken(refreshToken: string): Promise<JwtPayload & { exp: number }> {
    if (this.revokedTokens.has(refreshToken)) {
      throw new UnauthorizedException('Token has been revoked');
    }

    const decoded = await this.verifyToken(refreshToken);
    if (decoded.type !== 'refresh') {
      throw new UnauthorizedException('Invalid token type');
    }

    return decoded;
  }

  // Token rotation for security - the used refresh token can never be redeemed again.
  rotateRefreshToken(refreshToken: string, expiresAtSeconds: number): void {
    this.revokedTokens.set(refreshToken, expiresAtSeconds * 1000);
  }

  async revokeRefreshToken(refreshToken: string): Promise<void> {
    try {
      const decoded = await this.verifyToken(refreshToken);
      this.rotateRefreshToken(refreshToken, decoded.exp);
    } catch {
      // An invalid token was never valid, so there is nothing to revoke.
      // Blacklisting arbitrary strings here would let anyone flood the Map.
    }
  }

  private async verifyToken(token: string): Promise<JwtPayload & { exp: number }> {
    try {
      // jsonwebtoken always populates `exp` for tokens minted by generateTokenPair.
      return (await this.jwtService.verifyAsync(token)) as JwtPayload & { exp: number };
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
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
      this.logger.log(
        `Cleaned up ${cleanedCount} expired revoked tokens. Current blacklist size: ${this.revokedTokens.size}`,
      );
    }
  }
}
