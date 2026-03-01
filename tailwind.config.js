/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f6f8fd",
        secondary: "#475569",
        tertiary: "rgba(255, 255, 255, 0.6)",
        "black-100": "rgba(255, 255, 255, 0.8)",
        "black-200": "rgba(255, 255, 255, 0.4)",
        "white-100": "#334155",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};