export class CoinsBalanceResponseDto {
  coins: number;

  constructor(balance: number) {
    this.coins = balance;
  }
}