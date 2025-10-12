import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserWithAllRoles } from '@velue/shared-models';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserWithAllRoles => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);