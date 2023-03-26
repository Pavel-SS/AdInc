/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        17: '4.375rem',
        25: '6.25rem',
        57: '14.6875rem',
      },
      height: {
        17: '4.375rem',
        25: '6.25rem',
      },
      padding: {
        '10xl': '2.625rem',
      },
      margin: {
        '7xl': '1.875rem',
        13: '3.125rem',
      },
      fontSize: {
        '1.25xs': '0.625rem',
        xl: '1.25rem',
        '2.5xl': '1.75rem',
        '4.5xl': '2.5rem',
      },
      colors: {
        light_purple: '#8C52FF',
        light_grey: '#F4F4F4',
        grey_descr: '#7C7C7C',
        grey_menu: '#2A2D34',
        yellow_descr: '#FFEB3C',
        yellow_hover: '#DBC820',
        blue_descr: '#039BE6',
        error: '#E0371F',
        rose: '#E01F64',
      },
      boxShadow: {
        dark: '4px 4px 0px 0px #000000',
        purple: '4px 4px 0px 0px #8C52FF',
        rose: '4px 4px 0px 0px #E01F64',
      },
    },
  },
  plugins: [],
};
