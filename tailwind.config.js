/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
  
      colors: {
        bgFrom: "hsl(192, 100%, 67%)",
        bgTo: "hsl(280, 87%, 65%)",
        brightBlue: "hsl(220, 98%, 61%)",
        // dark theme
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        darkGrayishBlue1: " hsl(237, 14%, 26%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        hoverColor: "hsl(236, 33%, 92%)",
        desaturatedBlue: "hsl(235, 24%, 19%)",
        darkBlue: "hsl(235, 21%, 11%)",
        veryDarkGrayishBlue2: "hsl(233, 14%, 35%)",

        // light theme

        lightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        ltlgb: "hsl(233, 11%, 84%)",
        ltdgb: "hsl(236, 9%, 61%)",
        ltvdgb: "hsl(235, 19%, 35%)",
      },

      fontFamily: {
        bodyFont: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
