/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h6": "16px",
        "h5": "20px",
        "h4": "24px",
        "h3": "28px",
        "h2": "48px",
        "h1": "96px",
        "span": "13px"
      },
      colors: {
        white: {
          500: "#E5E5E5",
          100: "#FFFFFF"
        },
        green: {
          500: "#65E4A3",
        },
        blue: {
          500: "#0A2640",
          300: "#1C3D5B"
        },
        gray: {
          500: "#777777"
        },
        black: {
          500: "#000000"
        }
      },
    },
  },
  plugins: [],
};
