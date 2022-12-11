/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const addFeature = plugin(function ({ addUtilities }) {
  addUtilities({
    "rotate-y-360": {
      transform: "rotateY(360deg)"
    }
  })
})



module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      sm: '0.6rem',
      base: '1rem',
      xl: '1.25rem'
    },
    extend: {
      scale: {
        '-1': '-1'
      }
    }
  },
  plugins: [addFeature],
}
