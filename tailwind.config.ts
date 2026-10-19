import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1B2A1C",
        moss: "#0E150F",
        cream: "#F9F8F4",
        sage: "#7CA179",
      },
    },
  },
  plugins: [],
};

export default config;