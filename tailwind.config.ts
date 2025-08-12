import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kaisei': ['var(--font-kaisei)'],
        'raleway': ['var(--font-raleway)'],
        'inder': ['var(--font-inder)'],
      }
    }
  },
  plugins: [],
};

export default config;