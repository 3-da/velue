import type { Admin, BaseUser, Customer, Trainer } from '@velue/shared-data-access';

export type UserWithAllRoles = BaseUser & {
  customer: Customer | null;
  trainer: Trainer | null;
  admin: Admin | null;
};

export type UserCustomer = BaseUser & { customer: Customer };
export type UserTrainer = BaseUser & { trainer: Trainer };
export type UserAdmin = BaseUser & { admin: Admin };

// Client-safe projection of BaseUser. Password hashes and reset-token secrets
// are never part of the wire contract, unlike UserWithAllRoles above.
export type UserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  phone: string | null;
  address: string | null;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  passwordLastChanged: Date;
  customer: Customer | null;
  trainer: Trainer | null;
  admin: Admin | null;
};
