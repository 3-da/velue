import { Module } from '@nestjs/common';
import { DevController } from './dev.controller';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [DevController],
})
export class DevModule {}
