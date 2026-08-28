import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@velocity/shared-data-access';

export const Roles = (...roles: UserRole[]): ReturnType<typeof SetMetadata> => SetMetadata('roles', roles);