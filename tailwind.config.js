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
          light: "#ffdada",
          lighter: "#fff9f9"
        },
        disabled: {
          light: "#bdbcbc",
          DEFAULT: "#eaeaea",
          dark: "#8c8c8c"
        },
        dark: {
          DEFAULT: "#3e3e3e",
        }
      },
      screens: {
        xs: "320px"
      },
    },
  },
  plugins: [],
}