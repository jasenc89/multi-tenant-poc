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
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(1%)" },
          "10%": { transform: "translateX(-1%)" },
          "20%": { transform: "translateX(1%)" },
          "30%": { transform: "translateX(-1%)" },
          "40%": { transform: "translateX(1%)" },
          "50%": { transform: "translateX(-1%)" },
          "60%": { transform: "translateX(1%)" },
          "70%": { transform: "translateX(-1%)" },
          "80%": { transform: "translateX(1%)" },
          "90%": { transform: "translateX(-1%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        // wiggle: "wiggle 2s infinite",
        wiggle: "wiggle 0.5s linear 1",
      },
    },
  },
  plugins: [],
};
