/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0b1220",
        accent: "#00bcd4"
      },
      fontFamily: {
        luckiestguy: ['"Luckiest Guy"', 'cursive'],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
}