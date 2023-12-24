/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '10xl':'10rem'
    },
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1400px",
        },
        maxWidth: {
          DEFAULT: "max-w-xxl",
        },
      },
      containerfluid: {
        center: true,
        padding: ".5rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
