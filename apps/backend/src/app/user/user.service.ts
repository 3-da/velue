import { Injectable } from '@nestjs/common';
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
    // Complete deletion of user and all related data
    // Cascade deletes are configured in schema for related tables
    await this.prisma.baseUser.delete({
      where: { id: userId },
    });
  }

  // TODO: Add password reset functionality
  // async updatePassword(userId: string, hashedPassword: string): Promise<void>
}
