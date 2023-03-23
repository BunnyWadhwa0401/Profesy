/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#111",
      light: "#f8f8f8",
      dark: "#333",
      grey: "#666",
      background: "#F4F4F4",
      battery: "#EEE",
      primary: "#00CCC2",
      secondary: "#ddcfab",
    },
    fontFamily: {
      heading: ["Raleway", "sans-serif"],
      text: ["DM Sans", "sans-serif"],
      logo: ["McLaren", "sans-serif"],
    },
  },
  plugins: [],
};
