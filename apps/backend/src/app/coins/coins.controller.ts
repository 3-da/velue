import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { BuyCoinsDto } from './dto/buy-coins.dto';
import { UserRole } from '@velue/shared-data-access';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRoleGuard } from '../auth/guards/user-role.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { User } from '../auth/decorators/user.decorator';
import { UserWithAllRoles } from '@velue/shared-models';
import { CoinsPackageResponseDto } from './dto/coins-package-response.dto';
import { BuyCoinsResponseDto } from './dto/buy-coins-response.dto';

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

  @Post('buy')
  @UseGuards(JwtAuthGuard, UserRoleGuard)
  @Roles(UserRole.CUSTOMER)
  async buy(@Body() buyCoinsDto: BuyCoinsDto, @User() user: UserWithAllRoles): Promise<BuyCoinsResponseDto> {
    const result = await this.coinsService.buyCoins(user.id, buyCoinsDto.coinsPackageId, buyCoinsDto.paymentIntentId);
    return new BuyCoinsResponseDto(result.success, result.coinsAdded);
  }
}
