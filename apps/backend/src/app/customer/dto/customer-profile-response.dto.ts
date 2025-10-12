import { BaseUser, Customer } from '@velue/shared-data-access';

export class CustomerProfileResponseDto {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    birthDate: Date;
  };
  customer: {
    coins: number;
    emergencyContact?: string;
  };

  constructor(customerWithUser: Customer & { user: BaseUser }) {
    this.user = {
      id: customerWithUser.user.id,
      firstName: customerWithUser.user.firstName,
      lastName: customerWithUser.user.lastName,
      email: customerWithUser.user.email,
      phone: customerWithUser.user.phone || undefined,
      address: customerWithUser.user.address || undefined,
      birthDate: customerWithUser.user.birthDate,
    };
    this.customer = {
      coins: customerWithUser.coins,
      emergencyContact: customerWithUser.emergencyContact || undefined,
    };
  }
}
