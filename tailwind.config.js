/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl':'10rem'
      },
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
