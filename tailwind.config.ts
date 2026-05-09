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
        "gradient-cta":      "linear-gradient(135deg, #F97316, #FBBF24)",
        "gradient-hero-sky": "linear-gradient(to bottom, #0C2340 0%, #0C2340 22%, #1a3a6b 40%, #7c2d12 57%, #F97316 71%, #FBBF24 81%, #F97316 91%, #c2440f 100%)",
        "gradient-earth":    "linear-gradient(to top, #05101e 0%, #091828 55%, transparent 100%)",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
