import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';
import { CoinsService } from '../coins/coins.service';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private prisma: PrismaService, private coinsService: CoinsService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-08-27.basil',
    });
  }

  async createCheckoutSession(priceId: string, userId: string): Promise<{ url: string }> {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/training-sessions?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      metadata: {
        userId: userId,
        priceId: priceId,
      },
    });

    return { url: session.url };
  }

  async handlePaymentSuccess(sessionId: string): Promise<{ success: boolean; coinsAdded?: number }> {
    const session = await this.stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const userId = session.metadata.userId;
      const priceId = session.metadata.priceId;

      const coinsPackage = await this.prisma.coinsPackage.findFirst({
        where: { stripePriceId: priceId },
      });

      if (coinsPackage && userId) {
        return await this.coinsService.buyCoins(userId, coinsPackage.id, session.payment_intent as string);
      }
    }

    return { success: false };
  }
}
