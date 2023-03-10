/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs360: '360px',
      media400: '400px',
      ...defaultTheme.screens,
    },
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
        xl: '1.25rem',
        '2.5xl': '1.75rem',
      },
      colors: {
        light_purple: '#8C52FF',
        grey_descr: '#7C7C7C',
        yellow_descr: '#FFEB3C',
        yellow_hover: '#DBC820',
        blue_descr: '#039BE6',
        error: '#E0371F',
      },
      boxShadow: {
        'shadow-dark': '4px 4px 0px 0px #000000',
      },
    },
  },
  plugins: [],
};
