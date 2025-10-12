import { Controller, Get, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRoleGuard } from '../auth/guards/user-role.guard';
import { CustomerOwnershipGuard } from '../auth/guards/customer-ownership.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@velue/shared-data-access';
import { CustomerProfileResponseDto } from './dto/customer-profile-response.dto';
import { CoinsBalanceResponseDto } from './dto/coins-balance-response.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserRoleGuard, CustomerOwnershipGuard)
  @Roles(UserRole.CUSTOMER, UserRole.ADMIN)
  async findCustomer(@Param('id', ParseUUIDPipe) id: string): Promise<CustomerProfileResponseDto | null> {
    const customer = await this.customerService.findById(id);
    return customer ? new CustomerProfileResponseDto(customer) : null;
  }

  @Get(':id/profile')
  @UseGuards(JwtAuthGuard, UserRoleGuard, CustomerOwnershipGuard)
  @Roles(UserRole.CUSTOMER, UserRole.ADMIN)
  async findCustomerProfile(@Param('id', ParseUUIDPipe) id: string): Promise<CustomerProfileResponseDto | null> {
    const customer = await this.customerService.findById(id);
    return customer ? new CustomerProfileResponseDto(customer) : null;
  }

  @Get(':id/coins')
  @UseGuards(JwtAuthGuard, UserRoleGuard, CustomerOwnershipGuard)
  @Roles(UserRole.CUSTOMER, UserRole.ADMIN)
  async getCoinsBalance(@Param('id', ParseUUIDPipe) id: string): Promise<CoinsBalanceResponseDto> {
    const balance = await this.customerService.getCoinsBalance(id);
    return new CoinsBalanceResponseDto(balance);
  }
}
