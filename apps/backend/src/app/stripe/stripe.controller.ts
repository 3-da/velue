import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRoleGuard } from '../auth/guards/user-role.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { User } from '../auth/decorators/user.decorator';
import { UserWithAllRoles } from '@velocity/shared-models';
import { UserRole } from '@velocity/shared-data-access';

@Controller('stripe')
@UseGuards(JwtAuthGuard, UserRoleGuard)
@Roles(UserRole.CUSTOMER)
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-checkout-session')
  async createCheckoutSession(
    @Body() body: CreateCheckoutSessionDto,
    @User() user: UserWithAllRoles,
  ): Promise<{ url: string }> {
    return this.stripeService.createCheckoutSession(body.priceId, user.id);
  }

  @Get('payment-success')
  async handlePaymentSuccess(@Query('session_id') sessionId: string): Promise<{ success: boolean; coinsAdded?: number }> {
    return this.stripeService.handlePaymentSuccess(sessionId);
  }
}
