
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with the .dark class
  theme: {
    extend: {
      colors: {
        black: "#000000",
      },
    },
  },
  plugins: [],
}