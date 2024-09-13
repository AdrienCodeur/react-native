/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  presets: ["babel-preset-expo"],
  plugins: ["nativewind/babel"],
};
