const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#373530',
        'light-primary': '#F1F1EF',
        'dark-secondary': '#404040'
      }
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
