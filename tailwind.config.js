/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        17: '4.375rem',
        25: '6.25rem',
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
      },
      boxShadow: {
        'shadow-dark': '4px 4px 0px 0px #000000',
      },
    },
  },
  plugins: [],
};
