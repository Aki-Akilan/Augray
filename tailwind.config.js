/** @type {import('tailwindcss').Config} */
const fonts = require('./app/theme/fonts.js');
const colors = require('./app/theme/tailwindColors.js');

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fonts,
    },
  },
  plugins: [],
};
