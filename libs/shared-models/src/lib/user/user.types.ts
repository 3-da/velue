import type { Admin, BaseUser, Customer, Trainer } from '@velue/shared-data-access';

export type UserWithAllRoles = BaseUser & {
  customer: Customer | null;
  trainer: Trainer | null;
  admin: Admin | null;
};

export type UserCustomer = BaseUser & { customer: Customer };
export type UserTrainer = BaseUser & { trainer: Trainer };
export type UserAdmin = BaseUser & { admin: Admin };
