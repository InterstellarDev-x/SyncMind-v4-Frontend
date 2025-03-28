

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#101618",
          200: "#f9fbfa",

        },
        blue: {
          500: "#2c859d",
          400: "rgb(225, 231 , 253)",
          gaincolor : "#6a6cea"
        },
        link : {
          link : "rgb(74,153,233)"
        }
        
      },
    },
    fontFamily : {
      "kanit":  ["Kanit", "sans-serif"],
    "Pridi": ["Pridi", "serif"],
    "Imprima": ["Imprima", "sans-serif"],
    "Palanquin": ["Palanquin", "sans-seri"]
    
    }
  },
  plugins: [],
};

