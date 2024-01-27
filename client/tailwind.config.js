/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': ' #FFA500 ',
        'gray-dark': '#2d2d2d',
        'gray': '#e9e9e9',
        'gray-light': '#ececec',
        'black': '#010103',
        'gray-lighter':'#f8f8f8',
      },
      animation: {
        blob: "blob 5s infinite"
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%" : {
            transform: "translate(30px, 50px) scale(1.1)"
          },
          "66%" : {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  
    

  },
  plugins: [],
}