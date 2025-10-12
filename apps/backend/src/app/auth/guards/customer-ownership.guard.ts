import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { UserWithAllRoles } from '@velue/shared-models';
import { UserRole } from '@velue/shared-data-access';

@Injectable()
export class CustomerOwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: UserWithAllRoles = request.user;
    const targetUserId: string = request.params.id;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    // Admins can access any customer data
    if (user.role === UserRole.ADMIN) {
      return true;
    }

    // Customers can only access their own data
    if (user.role === UserRole.CUSTOMER && user.id === targetUserId) {
      return true;
    }

    throw new ForbiddenException('Access denied. You can only access your own data.');
  }
}