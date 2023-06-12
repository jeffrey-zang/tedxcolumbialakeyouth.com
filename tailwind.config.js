/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#c20025",
        black: "rgba(17,24,39,1)",
        white: "rgba(242,241,244,1)"
      }
    },
  },
  plugins: [],
}