import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserWithAllRoles } from '@velue/shared-models';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<UserWithAllRoles> {
    return this.prisma.baseUser.findUnique({
      where: { id },
      include: {
        customer: true,
        trainer: true,
        admin: true,
      },
    });
  }

  async findByEmail(email: string): Promise<UserWithAllRoles> {
    return this.prisma.baseUser.findUnique({
      where: { email },
      include: {
        customer: true,
        trainer: true,
        admin: true,
      },
    });
  }

  async updateLastLogin(userId: string): Promise<void> {
    await this.prisma.baseUser.update({
      where: { id: userId },
      data: { lastLogin: new Date() },
    });
  }

  async deleteAccount(userId: string): Promise<void> {
    // Get user to check if it's a demo account
    const user = await this.prisma.baseUser.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ConflictException('User not found');
    }

    // Prevent deletion of demo accounts
    const demoAccounts = ['test-customer@velue.de', 'test-trainer@velue.de', 'test-admin@velue.de'];
    if (demoAccounts.includes(user.email)) {
      throw new ConflictException(
        'Demo accounts cannot be deleted. These accounts are shared for testing purposes. Please register a new account to try the account deletion feature.',
      );
    }

    // Complete deletion of user and all related data
    // Cascade deletes are configured in schema for related tables
    await this.prisma.baseUser.delete({
      where: { id: userId },
    });
  }

  // TODO: Add password reset functionality
  // async updatePassword(userId: string, hashedPassword: string): Promise<void>
}
