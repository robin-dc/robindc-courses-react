/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors:{
        primary: "#12181b",
        secondary: "#22c55e",
        tertiary: "#ef4444",
        pColor: "#b2becd",
        bColor: "#2a2e35"
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "6rem",
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
      },
      spacing:{
        "1":  "1rem",
        "2": "2rem",
        "3": "3rem",
        "4": "4rem",
        "5": "5rem",
        "6": "6rem",
        "7": "7rem",
        "8": "8rem",
        "9": "9rem",
        "10": "10rem",
        "11": "11rem",
        "12": "12rem",
        "13": "13rem",
        "14": "14rem",
        "15": "15rem",
      },
      fontFamily: "Exo"
    },
  },
  plugins: [],
}
