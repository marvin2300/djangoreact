/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'doggo-green': 'rgb(242, 255, 242)',
        'accent': 'rgb(81, 181, 59)',
      }
    },
  },
  plugins: [],
}

