/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  // content: ["./public/**/*.{html,js}"],
  // content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
