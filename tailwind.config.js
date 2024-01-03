/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#476072',
        secondary: '#EEEEEE',
        button: '#6394A8',
        text: '#2C2C2C',
        done: '#1D8841'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes:{
        loading:{
          'from': {transform: 'rotate(0deg)'},
          'to': {transform: 'rotate(360deg)'}
        }
      },
      animation: {
        loading: 'loading 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}