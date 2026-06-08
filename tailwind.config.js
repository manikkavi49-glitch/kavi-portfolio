/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      blur: {
        '100': '100px',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%':       { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        swing: 'swing 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}