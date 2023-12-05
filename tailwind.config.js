/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        "clash+display": ["Clash Display", "sans-serif"],
        "Unica+one": ["Unica One", "sans-serif"],
      },
      backgroundImage: {
        premium: 'url("../src/assets/svgs/bg-premium.svg")',
      },
    },
  },
  plugins: [],
};
