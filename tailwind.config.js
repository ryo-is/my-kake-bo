module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
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
        sidemenu: '240px',
        maincontent: 'calc(100vw - 240px)',
      },
      height: {
        '5/12': '41.667%',
      },
      margin: {
        maincontent: '0 0 0 240px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
