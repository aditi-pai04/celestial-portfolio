import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 🔥 THIS WAS MISSING
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space)"],
        body: ["var(--font-jetbrains)"],
        darkHeading: ["var(--font-cormorant)"],
        darkBody: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};

export default config;
