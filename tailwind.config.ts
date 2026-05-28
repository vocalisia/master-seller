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
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e2e8f0",
            a: { color: "#f97316", "&:hover": { color: "#fb923c" } },
            h1: { color: "#f1f5f9" },
            h2: { color: "#f1f5f9" },
            h3: { color: "#f1f5f9" },
            h4: { color: "#f1f5f9" },
            strong: { color: "#f1f5f9" },
            code: { color: "#fb923c" },
            blockquote: { borderLeftColor: "#f97316", color: "#94a3b8" },
            hr: { borderColor: "#334155" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
