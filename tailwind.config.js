/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // add custom fonts here
      // sans: ['font name', 'sans-serif']
    },
    extend: {
      colors: {
        // add custom colors here
        // customColor: "#HEXCODE"
      },
    },
  },
  plugins: [],
};
