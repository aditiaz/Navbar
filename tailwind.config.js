/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  // content: ["./public/**/*.{html,js}"],
  // content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-binus": "url('../src/assets/binus.jpeg')",
      },
      colors: {
        orangeB: "#e48118",
        blueB: "#15B5EA",
        blueO: "#3E8BCD",
        footer: "#EBEBEB",
      },
      textColor: {
        orangeT: "#e48118",
        blueT: "#15B5EA",
      },
    },
  },
  plugins: [require("daisyui")],
};
