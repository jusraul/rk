/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#166534",
          600: "#059669",
        },
        accent: {
          600: "#0f766e",
        },
        cta: {
          600: "#059669",
        },
        bg: {
          50: "#fafaf9",
        },
        text: {
          900: "#0f172a",
        },
        secondary: {
          600: "#475569",
          700: "#334155",
        },
      },
    },
  },
  plugins: [],
};
