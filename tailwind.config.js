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
        darkred: "#4d1028",
        black: "#111827",
        white: "#e5e7eb",
        gradienttransition: "#451128"
      }
    },
  },
  plugins: [],
}