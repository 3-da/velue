import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@velue/shared-data-access';

export const Roles = (...roles: UserRole[]): ReturnType<typeof SetMetadata> => SetMetadata('roles', roles);