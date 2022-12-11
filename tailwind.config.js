/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#02B2AB",
        "brand-pink": "#FA3E6E",
      },
      fontFamily: {
        display: ["var(--lucky-font)"],
        sans: ["var(--atkinson-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
