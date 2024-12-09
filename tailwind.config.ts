import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        templateblack:"#0A0A0C",
        templategray:"#4C4F54",
        primary: "#ae0a46",
        secondary: "#662372",
        textgray:"#171717",

      },
    },
  },
  plugins: [],
} satisfies Config;
