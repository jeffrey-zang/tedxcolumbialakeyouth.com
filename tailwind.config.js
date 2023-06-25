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
      },
      animation: {
        'fadedown': "fadedown 2s ease forwards",
        'fadein': "fadein 1s ease 1.5s forwards"
      },
      keyframes: {
        fadedown: {
          '0%': {
            opacity: '0',
            transform: "translateY(-30%)"
          },
          '100%': {
            opacity: '1',
            transform: "translateY(0%)"
          }
        },
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
      }
    },
  },
  plugins: [],
}