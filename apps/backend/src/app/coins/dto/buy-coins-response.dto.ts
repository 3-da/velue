export class BuyCoinsResponseDto {
  success: boolean;
  coinsAdded: number;
  message: string;

  constructor(success: boolean, coinsAdded: number) {
    this.success = success;
    this.coinsAdded = coinsAdded;
    this.message = success 
      ? `Successfully added ${coinsAdded} coins to your account`
      : 'Failed to purchase coins';
  }
}