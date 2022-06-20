/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#3C5473",
      background_dark: "#364559",
      text: "#F25116",
      d: "#BF491F",
      texta: "#8C4130"
    },
    fontFamily: {
      maven: ["MAVEN"],
      azeret: ["AZERET"]
    }
  },
  plugins: [],
}
