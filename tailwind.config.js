module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 50px 10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
