import {RegisterCustomerResponse, TokenPair} from '@velue/shared-models';

export class RegisterCustomerResponseDto implements RegisterCustomerResponse {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
  tokens: TokenPair;

  constructor(
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    },
    tokens: TokenPair,
  ) {
    this.user = user;
    this.tokens = tokens;
  }
}
