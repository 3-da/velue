import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomerModule } from '../../customer/customer.module';
import { TrainingSessionsService } from '../training-sessions.service';

@Module({
  imports: [CustomerModule],
  controllers: [BookingController],
  providers: [BookingService, PrismaService, TrainingSessionsService],
})
export class BookingModule {}
