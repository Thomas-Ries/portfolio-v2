/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        libre: ['Roboto Condensed', 'Source Sans Pro', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // Globals
        'primary'     : '',
        'secondary'   : '',
        'tertiary'    : '',
        'link'        : '',
        'dark'        : '#000',

        // Backgrounds
        'charcoal'    : '#383230',
        'bamboo'      : '#CF8E55',
        'sandalwood'  : '#854621',
        'clay'        : '#BFAEA4',
        'gunmetal'    : '#32435F',
        'cream'       : '#E5D9CE',
        'grey'        : '#EDEDED',
        'dark'        : '#0F0F0F'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}