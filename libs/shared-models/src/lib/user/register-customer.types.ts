import { TokenPair } from '../auth';

export type RegisterCustomerRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string; // ISO date string
  phone?: string;
  address?: string;
  emergencyContact?: string;
  acceptsTerms: boolean;
  acceptsPrivacy: boolean;
  acceptsMarketing: boolean;
};

export type RegisterCustomerResponse = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
  tokens: TokenPair;
};
