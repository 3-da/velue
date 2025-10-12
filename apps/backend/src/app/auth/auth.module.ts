import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { CookieService } from './services/cookie.service';
import { UserModule } from '../user/user.module';
import { CustomerModule } from '../customer/customer.module';
import { EmailModule } from '../email/email.module';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserRoleGuard } from './guards/user-role.guard';
import { CustomerOwnershipGuard } from './guards/customer-ownership.guard';

@Module({
  imports: [
    UserModule,
    forwardRef(() => CustomerModule),
    EmailModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtService,
    PasswordService,
    CookieService,
    PrismaService,

    JwtStrategy,
    LocalStrategy,
    JwtAuthGuard,
    LocalAuthGuard,
    UserRoleGuard,
    CustomerOwnershipGuard,
  ],
  exports: [AuthService, JwtService, JwtAuthGuard, LocalAuthGuard, UserRoleGuard, CustomerOwnershipGuard],
})
export class AuthModule {}
