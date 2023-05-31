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
        'dark'        : '#000',

        // Backgrounds
        'charcoal'    : '#383230',
        'bamboo'      : '#CF8E55',
        'sandalwood'  : '#854621',
        'clay'        : '#BFAEA4',
        'gunmetal'    : '#32435F'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}