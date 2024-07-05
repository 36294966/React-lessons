/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '639px',
      'md': '767px',
      'lg': '1023px',
      'xl': '1279px',
      '2xl': '1535px',
    },
    extend: {
      colors:{
        'bg-color-dark': '#040E2B',
      },
    },
  },
  plugins: [],
};

