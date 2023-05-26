/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#07578e',
        blueblack: '#0a5e96',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        sm: '340px',
      },
    },
  },
  plugins: [],
};
