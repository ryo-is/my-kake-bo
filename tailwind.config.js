module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        common: [
          "'Avenir Next','Noto Sans JP', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        ],
      },
      width: {
        icon: '24px',
        '1/7': '14.285%',
      },
      height: {
        '5/12': '41.667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
