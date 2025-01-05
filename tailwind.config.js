/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center:true,
      padding:{
        DEFAULT:"0.6rem"
      }
    },
    screens:{
      sm:"560px",
      md:"768px",
      lg:"1024px",
      xl:"1240px"
    },
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
