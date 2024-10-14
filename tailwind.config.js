/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sue-ellen': ['Sue Ellen Francisco', 'sans-serif'], // Add your font here
      },
      animation: {
        shake: 'shake 0.3s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-5px, -5px)' },
          '50%': { transform: 'translate(5px, 5px)' },
          '75%': { transform: 'translate(-5px, 5px)' },
        },
      },
    
    },
  },
  plugins: [],
}

