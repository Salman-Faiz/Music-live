/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFont : "'Quicksand', sans-serif ",
  },
  animation: {
    wave: 'wave 1s linear infinite',
    wavey: 'wavey 1s linear infinite',
    waveey: 'waveey 1s linear infinite'
  },
  keyframes: {
    wave: {
      '0%, 100%': { transform: 'scaleY(1.5)' },
      '25%': { transform: 'scaleY(0.5)' },
      '50%': { transform: 'scaleY(0.7)' },
      '75%': { transform: 'scaleY(0.7)' },
    },
    wavey: {
      '0%, 100%': { transform: 'scaleY(1.8)' },
      '25%': { transform: 'scaleY(1.5)' },
      '50%': { transform: 'scaleY(0.6)' },
      '75%': { transform: 'scaleY(0.5)' },
    },
    waveey: {
      '0%, 100%': { transform: 'scaleY(1.4)' },
      '25%': { transform: 'scaleY(1)' },
      '50%': { transform: 'scaleY(1.5)' },
      '75%': { transform: 'scaleY(0.5)' },
    },
  },
}
  },
  plugins: [],
}


