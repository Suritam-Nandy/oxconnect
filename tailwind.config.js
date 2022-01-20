const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blueGray: colors.slate,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      rose: colors.rose,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      purple: colors.purple,
      pink: colors.pink,
      amber: colors.amber,
      orange: colors.orange,
      warmGray: colors.stone,
      lime: colors.lime,
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "visited", "focus", "checked", "hover"],
      borderColor: ["focus-visible", "first", "focus", "checked", "hover"],
      textColor: ["visited", "active", "focus", "checked", "hover"],
      fontWeight: ["hover", "focus", "active"],

      inset: ["checked"],
      boxShadow: ["active", "visited", "focus", "checked", "hover"],
    },
  },
  plugins: [],
};
