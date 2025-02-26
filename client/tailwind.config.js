/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        icons: ['"Material Icons"'],
        icon: ['"Material Icons"'],
        logo: ['"Material Icons"'],
        mono: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};
