import { Controller, Get, UseGuards } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { UserRole } from '@velocity/shared-data-access';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRoleGuard } from '../auth/guards/user-role.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CoinsPackageResponseDto } from './dto/coins-package-response.dto';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get()
  @UseGuards(JwtAuthGuard, UserRoleGuard)
  @Roles(UserRole.CUSTOMER, UserRole.ADMIN)
  async findAll(): Promise<CoinsPackageResponseDto[]> {
    const packages = await this.coinsService.findAll();
    return packages.map(pkg => new CoinsPackageResponseDto(pkg));
  }
}
