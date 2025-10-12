import { CoinsPackage } from '@velue/shared-data-access';

export class CoinsPackageResponseDto {
  id: string;
  name: string;
  coins: number;
  price: number;
  discount: number;
  description?: string;
  stripePriceId: string;

  constructor(coinsPackage: CoinsPackage) {
    this.id = coinsPackage.id;
    this.name = coinsPackage.name;
    this.coins = coinsPackage.coins;
    this.price = Number(coinsPackage.price);
    this.discount = Number(coinsPackage.discount || 0);
    this.description = coinsPackage.description || undefined;
    this.stripePriceId = coinsPackage.stripePriceId;
  }
}