/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#f97316"
        }
      }
    }
  },
  plugins: []
};

