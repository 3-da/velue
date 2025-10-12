import { Injectable, NotFoundException } from '@nestjs/common';
import { CoinsPackage } from '@velue/shared-data-access';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoinsService {
  constructor(private readonly prisma: PrismaService) {}

  async buyCoins(
    userId: string,
    coinsPackageId: string,
    paymentIntentId: string,
  ): Promise<{ success: boolean; coinsAdded: number }> {
    const coinsPackage = await this.prisma.coinsPackage.findUnique({
      where: { id: coinsPackageId },
    });

    if (!coinsPackage) {
      throw new NotFoundException('Coins package not found');
    }

    const result = await this.prisma.$transaction(async tx => {
      const customer = await tx.customer.findUnique({
        where: { userId },
      });

      if (!customer) {
        throw new NotFoundException('Customer not found');
      }

      const coinsPurchase = await tx.coinsPurchase.create({
        data: {
          userId,
          coinsPackageId: coinsPackage.id,
          quantity: 1,
          totalPrice: coinsPackage.price,
          paymentStatus: 'PAID',
          paymentMethod: 'stripe',
          paymentIntentId,
          completedAt: new Date(),
        },
      });

      const updatedCustomer = await tx.customer.update({
        where: { userId },
        data: {
          coins: {
            increment: coinsPackage.coins,
          },
        },
      });

      await tx.coinsTransaction.create({
        data: {
          userId,
          amount: coinsPackage.coins,
          type: 'PURCHASE',
          description: `Purchase of ${coinsPackage.name} package`,
          balanceAfter: updatedCustomer.coins,
          orderId: coinsPurchase.id,
        },
      });

      return { coinsAdded: coinsPackage.coins };
    });

    return { success: true, coinsAdded: result.coinsAdded };
  }

  findAll(): Promise<CoinsPackage[]> {
    return this.prisma.coinsPackage.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        coins: 'asc',
      },
    });
  }
}
