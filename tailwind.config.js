/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
    extend: {
      colors: {
        primary_text: "rgba(255, 56, 92, 1)",
        secondary_text: "rgba(57, 57, 57, 1)",
        white_text: "rgba(255, 255, 255, 1)",
        red_primary: "rgba(255, 56, 92, 1)",
        red_secondary: "rgba(153, 34, 55, 1)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        marcellus: ["marcellus, sans-serif"]
      },
    },
  },
  plugins: [],
}

