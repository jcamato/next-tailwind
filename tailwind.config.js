const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
      },
      transitionDuration: {
        0: '0ms',
        10: '10ms',
        25: '25ms',
        50: '50ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
