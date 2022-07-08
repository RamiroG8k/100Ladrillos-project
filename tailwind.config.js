/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f03c43",
          light: "#ffdada"
        },
        disabled: {
          DEFAULT: "#eaeaea",
          dark: "#8c8c8c"
        }
      },
      screens: {
        xs: "320px"
      },
    },
  },
  plugins: [],
}