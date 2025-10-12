import {Body, Controller, Get, Param, Patch} from '@nestjs/common';
import {TrainingSessionsService} from './training-sessions.service';
import {UpdateTrainingSessionStatusDto} from './dto';
import {TrainingSession} from '@velue/shared-data-access';

@Controller('training-sessions')
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
  updateOne(@Param('id') id: string, @Body() updateDto: UpdateTrainingSessionStatusDto): Promise<TrainingSession> {
    return this.trainingSessionsService.updateOne(id, updateDto);
  }
}
