/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#FFFFFF",
          200: "#F1F1F1"
        },
        grey: {
          100: "#A8A8A8"
        },
        black: {
          100: "#000000",
          200: "#222222"
        },
        pink: {
          100: "#F178B8"
        },
        purple: {
          100: "#986CDE"
        },
        blue: {
          100: "#5AC7D2"
        },
        green: {
          100: "#C8F165"
        },
        yellow: {
          100: "#FFDF59"
        },
        red: {
          100: "#FE574F"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"], 
        inter:['Inter', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
