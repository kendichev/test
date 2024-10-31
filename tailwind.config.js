/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // app directory
    './src/pages/**/*.{js,ts,jsx,tsx}', // if you have pages directory
    './src/components/**/*.{js,ts,jsx,tsx}', // components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
