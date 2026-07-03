import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';
import { CoinsService } from '../coins/coins.service';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private coinsService: CoinsService,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2025-08-27.basil',
    });
  }

  async createCheckoutSession(priceId: string, userId: string): Promise<{ url: string }> {
    const frontendUrl = this.configService.get('FRONTEND_URL');

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${frontendUrl}/training-sessions?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/pricing`,
      metadata: {
        userId: userId,
        priceId: priceId,
      },
    });

    return { url: session.url };
  }

  async handlePaymentSuccess(sessionId: string): Promise<{ success: boolean; coinsAdded?: number }> {
    const session = await this.stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return { success: false };
    }

    const userId = session.metadata.userId;
    const priceId = session.metadata.priceId;

    const coinsPackage = await this.prisma.coinsPackage.findFirst({
      where: { stripePriceId: priceId },
    });

    if (!coinsPackage || !userId) {
      return { success: false };
    }

    return this.creditCoinsOnce(userId, coinsPackage.id, session.payment_intent as string);
  }

  // The success URL is a plain redirect the browser can reload, so the same
  // session can arrive twice. The unique paymentIntentId makes the second
  // insert fail with P2002, which we treat as an already-processed no-op.
  private async creditCoinsOnce(
    userId: string,
    coinsPackageId: string,
    paymentIntentId: string,
  ): Promise<{ success: boolean; coinsAdded?: number }> {
    try {
      return await this.coinsService.buyCoins(userId, coinsPackageId, paymentIntentId);
    } catch (error) {
      if (error.code === 'P2002') {
        return { success: true, coinsAdded: 0 };
      }
      throw error;
    }
  }
}
