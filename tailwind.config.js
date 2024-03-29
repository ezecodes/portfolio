/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		...colors,
  		_prim_orange: '#f58632',
  	},
    extend: {},
  },
  plugins: [],
}