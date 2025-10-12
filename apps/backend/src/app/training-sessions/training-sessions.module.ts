import { Module } from '@nestjs/common';
import { TrainingSessionsService } from './training-sessions.service';
import { TrainingSessionsController } from './training-sessions.controller';
import { PrismaService } from '../prisma/prisma.service';
import { BookingModule } from './booking/booking.module';

@Module({
  controllers: [TrainingSessionsController],
  providers: [TrainingSessionsService, PrismaService],
  imports: [BookingModule],
})
export class TrainingSessionsModule {}
