/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui"
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUi],
  daisyUi : {
    themes : ['dark'],
    darkTheme : "dark"
  },
  darkMode : "class",

}

