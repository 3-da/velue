import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeController } from './stripe.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CoinsModule } from '../coins/coins.module';

@Module({
  imports: [CoinsModule],
  controllers: [StripeController],
  providers: [StripeService, PrismaService],
})
export class StripeModule {}
