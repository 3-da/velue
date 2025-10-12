import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-checkout-session')
  async createCheckoutSession(@Body() body: { priceId: string, userId: string }): Promise<{ url: string }> {
    return this.stripeService.createCheckoutSession(body.priceId, body.userId);
  }

  @Get('payment-success')
  async handlePaymentSuccess(@Query('session_id') sessionId: string): Promise<{ success: boolean; coinsAdded?: number }> {
    return this.stripeService.handlePaymentSuccess(sessionId);
  }
}
