/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors:{
        rgbBG:"rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [],
}
