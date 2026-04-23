import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:   "#0C2340",
        orange: "#F97316",
        gold:   "#FBBF24",
        sky:    "#0EA5E9",
        green:  "#166534",
        cream:  "#FEF9F0",
        grey:   "#6B7280",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans:    ['"DM Sans"', "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(135deg, #F97316, #FBBF24)",
      },
    },
  },
  plugins: [],
};

export default config;
