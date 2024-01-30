/** @type {import('tailwindcss').Config} */

//const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      Workbench: ['Workbench', 'sans-serif']
    },
  },
};
