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
      },
      
      animation: {
        shake: 'shake 10s ease-in-out infinite',
        rotateInDownLeft: 'rotateInDownLeft 3s ease-in-out infinite',
      },

      keyframes: {
        shake: {
          '0%, 100%' : {transform: 'translateX(0)'},
          '10%, 30%, 50%, 70%, 90%' : {transform: 'translateX(1px)'},
          '20%, 40%, 60%, 80%' : {transform: 'translateX(10px)'}
        },
        shakeInverse: {
          '0%, 100%' : {transform: 'translateY(0)'},
          '10%, 30%, 50%, 70%, 90%' : {transform: 'translateY(1px)'},
          '20%, 40%, 60%, 80%' : {transform: 'translateY(10px)'}
        },
        rotateInDownLeft: {
          '0%' : { origin: 'left bottom', transform: 'rotate(-15deg)', opacity: '1'},
          '50%' : {origin: 'left bottom', transform: 'rotate(0)', opacity: '1'},
          '100%' : {origin: 'bottom left', transform: 'rotate(-15deg)', opacity: '1'},
        }
    },
  }
  },

  variants: {
    extend: {},
  },

  plugins: [],

}