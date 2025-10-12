export type CoinsPackage = {
  name: string;
  coins: number;
  price: number;
  discount: number | null;
  description: string;
  stripePriceId: string;
};

export const COINS_PACKAGES: CoinsPackage[] = [
  {
    name: 'Starter',
    coins: 10,
    price: 15,
    discount: null,
    description: 'Perfect for trying out our platform! Get started with essential coins to explore all features.',
    stripePriceId: 'price_1S8OR9RtmuwKtbzyI1FeAymv',
  },
  {
    name: 'Regular',
    coins: 40,
    price: 55,
    discount: null,
    description: 'Great value for regular users. Ideal for small teams and consistent monthly usage.',
    stripePriceId: 'price_1S8OSKRtmuwKtbzytVeMDRbZ',
  },
  {
    name: 'Premium',
    coins: 120,
    price: 160,
    discount: null,
    description: 'Premium features unlocked! Advanced tools and priority support for power users.',
    stripePriceId: 'price_1S8OSwRtmuwKtbzyrfcYQrBA',
  },
  {
    name: 'Unlimited',
    coins: 240,
    price: 300,
    discount: null,
    description: 'Go unlimited! Perfect for businesses and heavy users who need maximum flexibility.',
    stripePriceId: 'price_1S8OTgRtmuwKtbzyIdxYhvQk',
  },
];
