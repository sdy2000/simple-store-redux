/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // / // / // Light Mode // / // / //
        // Backround
        lbp: "#ffffff",
        lbs: "#f0f0ff",
        lbt: "#d2d2d2",
        // Action
        lap: "#d5e2f1",
        las: "#e7f0f8",
        // Foreground
        lfp: "#232b39",
        lfs: "#697586",
        lft: "#52565c",

        // Oder
        gold: "#eebc1d",
        dgold: "#c89d14",
        silver: "#949494",
        dsilver: "#6c6c6c",
        blue: "#375fd9",
        lblue: "#6188ff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.25rem",
          sm: "0.5rem",
          lg: "3rem",
          xl: "4.5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        xs: "550px",
        // => @media (min-width: 550px) { ... }

        sm: "650px",
        // => @media (min-width: 650px) { ... }
      },
    },
  },
};
