// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure your files are included
  theme: {
    extend: {
      colors: {
        customRed: "#c8281f", // Add your custom color
        customOrange: "#e67541",
        customBlack: "#1a2432",
      },
    },
  },
  plugins: [],
};
