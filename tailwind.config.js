/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#04071D",
          2: "#793aff",
          3: "rgba(0,0,0,0.4)",
          4: "#d1d5db",
        },
        main : {
          "card" : "#1B1E27",
        }
      },
      rotate : {
        "360" : "360deg",
      },
      textShadow: {
        "logo": "0 0px 5px #793aff",
        "logoMobile": "0 0px 10px white",
        "dev" : "0 0px 10px #793aff",
      },
      boxShadow: {
        "light": "0 0 5px white",
        "line": "0 0px 10px #793aff",
        "image": "0 0px 30px #793aff",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const shadows = theme("textShadow");
      if (shadows) {
        Object.entries(shadows).forEach(([key, value]) => {
          newUtilities[`.text-shadow-${key}`] = {
            textShadow: value,
          };
        });
        addUtilities(newUtilities);
      }
    },
  ],
};
