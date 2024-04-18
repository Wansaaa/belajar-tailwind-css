/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },

      animation: {
        zoom:'zoom 1s ease-in-out infinite'
      },

      keyframes: {
        zoom: {
          '0': { transform: scale(0), opacity: '0' },
          '100%': { transform: scale(1), opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
