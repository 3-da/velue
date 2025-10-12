export type StripeTestCard = {
  number: string;
  brand: string;
  scenario: string;
  description: string;
  expectedResult: string;
};

export type StripeTestCardGroup = {
  title: string;
  description: string;
  cards: StripeTestCard[];
};

export const STRIPE_TEST_CARDS: StripeTestCardGroup[] = [
  {
    title: 'Successful Payments',
    description: 'Cards for demonstrating successful payment flow',
    cards: [
      {
        number: '4242 4242 4242 4242',
        brand: 'Visa',
        scenario: 'success',
        description: 'Standard successful payment',
        expectedResult: 'Payment succeeds, coins added to account',
      },
      {
        number: '5555 5555 5555 4444',
        brand: 'Mastercard',
        scenario: 'success',
        description: 'Mastercard successful payment',
        expectedResult: 'Payment succeeds, coins added to account',
      },
      {
        number: '3782 8224 6310 005',
        brand: 'American Express',
        scenario: 'success',
        description: 'Amex successful payment',
        expectedResult: 'Payment succeeds, coins added to account',
      },
    ],
  },
  {
    title: 'Declined Payments',
    description: 'Cards for demonstrating error handling and user experience',
    cards: [
      {
        number: '4000 0000 0000 0002',
        brand: 'Visa',
        scenario: 'generic_decline',
        description: 'Generic decline',
        expectedResult: "Shows 'Your card was declined' message with retry option",
      },
      {
        number: '4000 0000 0000 9995',
        brand: 'Visa',
        scenario: 'insufficient_funds',
        description: 'Insufficient funds',
        expectedResult: "Shows 'Insufficient funds' message with retry option",
      },
      {
        number: '4000 0000 0000 9987',
        brand: 'Visa',
        scenario: 'lost_card',
        description: 'Lost card',
        expectedResult: "Shows 'Your card was declined' message",
      },
      {
        number: '4000 0000 0000 9979',
        brand: 'Visa',
        scenario: 'stolen_card',
        description: 'Stolen card',
        expectedResult: "Shows 'Your card was declined' message",
      },
    ],
  },
  {
    title: 'Authentication Required',
    description: 'Cards for demonstrating 3D Secure and authentication flows',
    cards: [
      {
        number: '4000 0025 0000 3155',
        brand: 'Visa',
        scenario: 'authentication_required',
        description: 'Requires 3D Secure authentication',
        expectedResult: 'Prompts for additional authentication, then succeeds',
      },
      {
        number: '4000 0000 0000 3220',
        brand: 'Visa',
        scenario: 'authentication_required_setup_for_off_session',
        description: 'Authentication required for future payments',
        expectedResult: 'Requires authentication setup',
      },
    ],
  },
  {
    title: 'International Cards',
    description: 'Cards for demonstrating international payment support',
    cards: [
      {
        number: '4000 0276 0000 0016',
        brand: 'Visa',
        scenario: 'international_germany',
        description: 'German Visa card',
        expectedResult: 'Successful payment with German locale',
      },
      {
        number: '4000 0250 0000 1001',
        brand: 'Visa',
        scenario: 'international_france',
        description: 'French Visa card',
        expectedResult: 'Successful payment with French locale',
      },
      {
        number: '4000 0826 0000 0001',
        brand: 'Visa',
        scenario: 'international_uk',
        description: 'UK Visa card',
        expectedResult: 'Successful payment with UK locale',
      },
    ],
  },
  {
    title: 'Processing Errors',
    description: 'Cards for demonstrating system resilience and error recovery',
    cards: [
      {
        number: '4000 0000 0000 0119',
        brand: 'Visa',
        scenario: 'processing_error',
        description: 'Processing error',
        expectedResult: "Shows 'Processing error' message with retry option",
      },
      {
        number: '4000 0000 0000 0341',
        brand: 'Visa',
        scenario: 'incorrect_cvc',
        description: 'Incorrect CVC',
        expectedResult: "Shows 'Your card's security code is incorrect' message",
      },
      {
        number: '4000 0000 0000 0069',
        brand: 'Visa',
        scenario: 'expired_card',
        description: 'Expired card',
        expectedResult: "Shows 'Your card has expired' message",
      },
    ],
  },
];

// Quick access to most commonly used cards for MVP demo
export const MVP_DEMO_CARDS = {
  // Primary success card for main demo flow
  SUCCESS: STRIPE_TEST_CARDS[0].cards[0],

  // Primary decline card for error handling demo
  DECLINE: STRIPE_TEST_CARDS[1].cards[0],

  // Insufficient funds for specific error scenario
  INSUFFICIENT_FUNDS: STRIPE_TEST_CARDS[1].cards[1],

  // Authentication required for advanced demo
  AUTH_REQUIRED: STRIPE_TEST_CARDS[2].cards[0],

  // German card for international demo (relevant for German market)
  GERMANY: STRIPE_TEST_CARDS[3].cards[0],
};

// Standard test data to use with any card
export const TEST_CARD_DATA = {
  expiry: '12/34', // Any future date
  cvc: '123', // Any 3 digits (4 for Amex)
  name: 'Test Customer',
  email: 'test-customer@velue.de',
  country: 'DE', // Germany (relevant for MVP market)
  postalCode: '10115', // Berlin postal code
};
