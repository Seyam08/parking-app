/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prk-teal': '#E7F0E4',
        'prk-brown': '#DBDBCA',
      },
    },
  },
  plugins: [],
}

