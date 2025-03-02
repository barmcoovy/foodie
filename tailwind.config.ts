// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "slide-down": "slideDown 0.5s ease-out forwards", // Animacja w dół
        "slide-up": "slideUp 0.5s ease-out forwards", // Animacja w górę
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%)", // Element zaczyna powyżej ekranu
          },
          "100%": {
            transform: "translateY(0)", // Element kończy na swojej normalnej pozycji
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(0)", // Element zaczyna w swojej normalnej pozycji
          },
          "100%": {
            transform: "translateY(-100%)", // Element znika powyżej ekranu
          },
        },
      },
    },
  },
  plugins: [],
};
