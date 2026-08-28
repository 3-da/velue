import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { DemoScheduleService } from './demo-schedule.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [DemoScheduleService, PrismaService],
})
export class DemoScheduleModule {}
