import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { RegisterCustomerDto } from './dto/register-customer.dto';
import { UserWithAllRoles } from '@velue/shared-models';
import { BaseUser, Customer, UserRole } from '@velue/shared-data-access';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async registerCustomer(customerData: RegisterCustomerDto, tx?: Prisma.TransactionClient): Promise<UserWithAllRoles> {
    const prisma = tx || this.prisma;

    const baseUser = await prisma.baseUser.create({
      data: {
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        email: customerData.email,
        password: customerData.password,
        birthDate: new Date(customerData.birthDate),
        phone: customerData.phone,
        address: customerData.address,
        role: UserRole.CUSTOMER,
      },
    });

    await prisma.customer.create({
      data: {
        userId: baseUser.id,
        coins: 0,
        emergencyContact: customerData.emergencyContact || undefined,
      },
    });

    return prisma.baseUser.findUnique({
      where: { id: baseUser.id },
      include: {
        customer: true,
        trainer: true,
        admin: true,
      },
    });
  }

  async findById(userId: string): Promise<(Customer & { user: BaseUser }) | null> {
    return this.prisma.customer.findUnique({
      where: { userId },
      include: {
        user: true,
      },
    });
  }

  async getCoinsBalance(userId: string): Promise<number> {
    const customer = await this.prisma.customer.findUnique({
      where: { userId },
      select: { coins: true },
    });
    return customer?.coins || 0;
  }

  async addCoins(userId: string, amount: number, tx?: Prisma.TransactionClient): Promise<void> {
    const prisma = tx || this.prisma;

    await prisma.customer.update({
      where: { userId },
      data: {
        coins: {
          increment: amount,
        },
      },
    });
  }

  async deductCoins(userId: string, amount: number, tx?: Prisma.TransactionClient): Promise<void> {
    const prisma = tx || this.prisma;

    await prisma.customer.update({
      where: { userId },
      data: {
        coins: {
          decrement: amount,
        },
      },
    });
  }

  async hasEnoughCoins(userId: string, requiredCoins: number): Promise<boolean> {
    const customer = await this.prisma.customer.findUnique({
      where: { userId },
      select: { coins: true },
    });
    return customer?.coins >= requiredCoins;
  }
}
