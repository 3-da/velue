export type CoinsPackageResponse = {
  id: string;
  name: string;
  coins: number;
  price: number;
  discount: number | null;
  description: string;
  stripePriceId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};