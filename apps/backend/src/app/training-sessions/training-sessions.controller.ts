import {Body, Controller, Get, Param, Patch, UseGuards} from '@nestjs/common';
import {TrainingSessionsService} from './training-sessions.service';
import {UpdateTrainingSessionStatusDto} from './dto';
import {TrainingSession, UserRole} from '@velue/shared-data-access';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';
import {UserRoleGuard} from '../auth/guards/user-role.guard';
import {Roles} from '../auth/decorators/roles.decorator';

@Controller('training-sessions')
@UseGuards(JwtAuthGuard)
export class TrainingSessionsController {
  constructor(private readonly trainingSessionsService: TrainingSessionsService) {}

  @Get('upcoming')
  findUpcoming(): Promise<TrainingSession[]> {
    return this.trainingSessionsService.findUpcoming();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TrainingSession> {
    return this.trainingSessionsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(UserRoleGuard)
  @Roles(UserRole.TRAINER, UserRole.ADMIN)
  updateOne(@Param('id') id: string, @Body() updateDto: UpdateTrainingSessionStatusDto): Promise<TrainingSession> {
    return this.trainingSessionsService.updateOne(id, updateDto);
  }
}
