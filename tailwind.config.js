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
        'dark'        : '#000',
        'yellowish'   : '#F0D140',
        
        // Link Hover
        'github'      : '#77B1DA',
        'medium'      : '#FFC016',
        'pinterest'   : '#B3091A',

        // Backgrounds
        'charcoal'    : '#383230',
        'bamboo'      : '#CF8E55',
        'grey'        : '#EDEDED',
        'footer'      : '#F5F5F5',
        'dark'        : '#0F0F0F',
        'competences' : '#363434',
      },
      
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}