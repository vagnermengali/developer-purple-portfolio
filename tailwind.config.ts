import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        brand1: "#FE0A45",
        brand2: "#000000",
        brand3: "#101010",
        brand4: "linear-gradient(90deg, #990024 0%, #D00031 50%, #990024 100%)",
        brand5: "#828c96",
        brand6: "linear-gradient(#101010 0%, #000000 100%)",
        brand7: "#FF1A56",
        brand8: "#D80B4B",
        brand9: "#D00031",
        brand10: "#990024",
        white: "#FFFFFF",
        black: "#000000",
        blur: "#FFFFFF30",
        transparent: "transparent",
      },
      backgroundImage: {
        'gradient1': "linear-gradient(90deg, #990024 0%, #D00031 50%, #990024 100%)",
        'gradient2': "linear-gradient(#101010 0%, #000000 100%)",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
export default config;