/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prk-bg': '#F0F2F1',
        'prk-fg': '#FFFFFF',
        'prk-text-clr': '#2D3652',
        'prk-btn-clr': '#FFC700',
      },
    },
  },
  plugins: [],
}

