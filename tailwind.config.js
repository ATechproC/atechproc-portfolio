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
          '1': '#04071D',
          '2': '#793aff',
          '3' : "rgba(0,0,0,0.4)",
        },
      },
      textShadow: {
          logo : "0 0px 5px #793aff",
          logoMobile : "0 0px 5px white",
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities, theme }) {
      const newUtilities = {}
      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: value
        }
      })
      addUtilities(newUtilities)
    }
  ],
}
