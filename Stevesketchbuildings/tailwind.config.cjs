/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#334155",
          light: "#475569",
          dark: "#1e293b",
        },
        neutral: {
          paper: "#fafafa",
          border: "#e5e7eb",
          mute: "#9ca3af",
        },
      },
      maxWidth: {
        section: "72rem",
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
    },
  },
  plugins: [],
};
