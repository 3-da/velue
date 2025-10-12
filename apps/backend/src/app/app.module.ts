import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingSessionsModule } from './training-sessions/training-sessions.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CoinsModule } from './coins/coins.module';
import { StripeModule } from './stripe/stripe.module';
import { CustomerModule } from './customer/customer.module';
import { DevModule } from './dev/dev.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env'],
    }),
    TrainingSessionsModule,
    AuthModule,
    UserModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'short',
          ttl: 1000, // 1 second
          limit: 3, // 3 requests per second
        },
        {
          name: 'medium',
          ttl: 60000, // 1 minute
          limit: 20, // 20 requests per minute
        },
        {
          name: 'long',
          ttl: 3600000, // 1 hour
          limit: 100, // 100 requests per hour
        },
      ],
    }),
    CoinsModule,
    StripeModule,
    CustomerModule,
    DevModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
