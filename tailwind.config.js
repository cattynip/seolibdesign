/** @type {import('tailwindcss').Config} */
const options = {
  content: [
    "pages/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "styles/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = options;
