/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms"
      },
      colors: {
        red: "#c20025",
        darkred: "#4d1028",
        black: "#111827",
        white: "#e5e7eb",
        gradienttransition: "#451128",
        dimmed: "#999"
      },
      animation: {
        'fadedown': "fadedown 2.5s ease forwards",
        "fadeup": "fadeup 1s ease 2s forwards",
        'fadein': "fadein 1s ease 2s forwards",
        "appear": "appear 1s ease 2s forwards"
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
        fadeup: {
          '0%': {
            opacity: '0',
            transform: "translateY(30%)"
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
        appear: {
          '0%': {
            display: "none",
          },
          '100%': {
            display: "flex",
          }
        }
      }
    },
  },
  plugins: [],
}