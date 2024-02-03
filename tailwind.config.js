const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4a6283", // For lighter primary color
          DEFAULT: "#283b50", // Normal primary color
          dark: "#1f2937", // Used for hover, active, etc.
        }
      }
    }
  },
  plugins: [
    require("kutty"), 
    require("@tailwindcss/typography"), 
    addDynamicIconSelectors()
  ],
}
