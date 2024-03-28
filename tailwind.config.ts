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
        brand1: "#9C54D5",
        brand2: "#FFFFFF",
        brand3: "#F5F5F5",
        brand4: "#6F6F6F",
        brand5: "#828c96",
        brand6: "#5EE2F0",
        brand7: "#9C54D5",
        brand8: "#462964",
        brand9: "#4B484E",
        white: "#FFFFFF",
        black: "#000000",
        blur: "#00000030",
        transparent: "transparent",
      },
      backgroundImage: {
        'gradient1': "linear-gradient(90deg, #5EE2F0 0%, #9C54D5 50%,  #462964 100%)",
        'gradient2': "linear-gradient(#FFFFFF 0%,  #F5F5F5 100%)",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
export default config;