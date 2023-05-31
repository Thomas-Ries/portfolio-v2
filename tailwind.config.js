/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Globals
        'primary'     : '',
        'secondary'   : '',
        'tertiary'    : '',
        'link'        : '',
        'dark'       : '#000',

        // Backgrounds
        'primary-bg'  : '',
        'bamboo'   : '#CF8E55'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}