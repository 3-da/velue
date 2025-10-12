import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinsController } from './coins.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CoinsController],
  providers: [CoinsService, PrismaService],
  exports: [CoinsService],
})
export class CoinsModule {}
