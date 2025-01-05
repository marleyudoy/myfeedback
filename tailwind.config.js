/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#1677BD",
        secondary_color1: "#1010101F",
        secondary_color2: "#8F8F8F",
      },
      fontFamily: {
        Lexend: '"Nunito", serif',
      },
    },
  },
  plugins: [],
};
