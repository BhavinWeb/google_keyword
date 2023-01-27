/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./public/index.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { // Kilvish
          dark: '#000114',
          DEFAULT: '#000228', // same as pure
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#949BA8',
          600: '#666C7C',
          700: '#475160',
          800: '#343E4F',
          900: '#1D2736'
        },
        secondary: {
          DEFAULT: '#12131A'
        },
        red: { // Shaktiman
          brand: '#D93121',
          dark: '#A9250F',
          DEFAULT: '#E2462C', // same as pure
          50: '#FDF2F2',
          100: '#FDF2F2',
          200: '#FBE5E5',
          300: '#F6C8C0',
          400: '#F3B5AB',
          500: '#F0A295',
          600: '#EE9080',
          700: '#EB7E6B',
          800: '#E86B56',
          900: '#E55841'
        },
        steelblue: { // Nightwing
          DEFAULT: '#20557D', // same as pure
          100: '#E9EEF2',
          200: '#D2DDE5',
          300: '#BCCCD8',
          400: '#A6BBCB',
          500: '#8FAABE',
          600: '#7999B1',
          700: '#6388A4',
          800: '#4D7797',
          900: '#36668A'
        },
        sky: { // Nightwing
          DEFAULT: '#52AADB', // same as pure
          100: '#EEF7FB',
          200: '#DCEEF8',
          300: '#CBE6F4',
          400: '#BADDF1',
          500: '#A8D4ED',
          600: '#97CCE9',
          700: '#86C4E6',
          800: '#75BBE2',
          900: '#63B2DF'
        },
        yellow: { // Wolverine
          DEFAULT: '#F8C450', // same as pure
          50: '#FEF9EE',
          100: '#FEF9EE',
          200: '#FEF3DC',
          300: '#FDEDCB',
          400: '#FCE7B9',
          500: '#FBE1A7',
          600: '#FBDC96',
          700: '#FAD685',
          800: '#F9D073',
          900: '#F9CA61'
        },
        orange: { // Garfield
          DEFAULT: '#EC5B16'
        },
        pink: { // Harley Quinn
          DEFAULT: '#F20D70'
        },
        lime: { // Robin
          DEFAULT: '#B4C236'
        },
        green: { // Joker
          DEFAULT: '#53B745',
          50: '#F9FFF8',
          100: '#DDF1DA',
          600: '#429637',
          700: '#317727'
        },
        violet: { // Hit-Girl
          DEFAULT: '#8338EC',
          100: '#F0E8FD'
        },
        magenta: { // Phantom
          DEFAULT: '#AE33D9',
          50: '#FDF7FF'
        },
        cobalt: { // Beast
          DEFAULT: '#233AC9'
        },
        gray: {
          DEFAULT: '#F2F2F2',
          500: '#262626',
          600: '#333333'
        },
        darkgray: { // Batman
          DEFAULT: '#12334B'
        },
        blue: { // Doctor Manhattan
          DEFAULT: '#0075FF'
        },
        random: {
          F2F2F2: '#F2F2F2'
        }
      }
    },
  },
  plugins: [],
}