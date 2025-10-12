import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  plugins: [PrimeUI],
  // Prevent Tailwind from conflicting with PrimeNG
  corePlugins: {
    preflight: false,
  },
};
