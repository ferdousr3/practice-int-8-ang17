/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1280px",
        },
        maxWidth: {
          DEFAULT: "max-w-xl",
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
