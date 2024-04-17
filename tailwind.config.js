/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Work-Sans': [' "Work Sans", sans-serif'],
        'RedHat-Display': [' "Red Hat Display", sans-serif'],
      },
    },
  },
  plugins: [],
}

