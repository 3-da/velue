import { Admin, Customer, Trainer } from '@velue/shared-data-access';
import { UserResponse, UserWithAllRoles } from '@velue/shared-models';

// Safe projection of BaseUser for client responses. Password hashes and
// reset-token secrets must never leave the server, so they are not copied here.
export class UserResponseDto implements UserResponse {
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

  constructor(user: UserWithAllRoles) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.birthDate = user.birthDate;
    this.phone = user.phone;
    this.address = user.address;
    this.role = user.role;
    this.isActive = user.isActive;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.lastLogin = user.lastLogin;
    this.passwordLastChanged = user.passwordLastChanged;
    this.customer = user.customer;
    this.trainer = user.trainer;
    this.admin = user.admin;
  }
}
