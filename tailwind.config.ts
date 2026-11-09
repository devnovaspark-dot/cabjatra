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
          50: "#f2f7f6",
          100: "#e0ecea",
          200: "#c1dad7",
          300: "#95bfbb",
          400: "#639d99",
          500: "#44817d",
          600: "#346663",
          700: "#2a514f",
          800: "#073B3A", // Deep forest teal
          900: "#062F31", // Dark teal
          950: "#041F20", // Deepest teal-charcoal
        },
        forest: {
          DEFAULT: "#073B3A",
          dark: "#062F31",
          deep: "#041F20",
        },
        gold: {
          50: "#fcf8ee",
          100: "#f7efd6",
          200: "#eedda9",
          300: "#e4c676",
          400: "#D9A52B", // Premium muted gold
          500: "#c89423",
          600: "#a9741a",
          700: "#835317",
          800: "#6d4319",
          900: "#5d3819",
        },
        accent: {
          50: "#fcf8ee",
          100: "#f7efd6",
          200: "#eedda9",
          300: "#e4c676",
          400: "#D9A52B", // Muted gold
          500: "#c89423",
          600: "#a9741a",
          700: "#835317",
          800: "#6d4319",
          900: "#5d3819",
        },
        charcoal: {
          DEFAULT: "#182A2B",
          light: "#2A3E3F",
          muted: "#667575",
        },
        surface: {
          ivory: "#FAF9F5",
          neutral: "#F2F5F2",
          border: "#E2E8E2",
          card: "#FFFFFF",
        },
        sand: {
          50: "#FAF9F5", // Warm ivory
          100: "#F2F5F2", // Soft neutral
          200: "#E5EBE5",
          300: "#D4DDD4",
        },
        slate: {
          600: "#667575",
          700: "#455353",
          800: "#2B3838",
          900: "#182A2B",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        // Natural neutral luxury shadows (no teal tint)
        soft: "0 2px 8px -1px rgba(0, 0, 0, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 25px -4px rgba(0, 0, 0, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.04)",
        lift: "0 20px 35px -8px rgba(0, 0, 0, 0.12)",
        // Pure tactile skeuomorphic depth
        skeuo: "0 1px 0 0 rgba(255, 255, 255, 0.9) inset, 0 -1px 0 0 rgba(0, 0, 0, 0.06) inset, 0 4px 16px -2px rgba(0, 0, 0, 0.07)",
        "skeuo-button": "0 1px 0 0 rgba(255, 255, 255, 0.25) inset, 0 -2px 0 0 rgba(0, 0, 0, 0.3) inset, 0 4px 12px rgba(0, 0, 0, 0.2)",
        "skeuo-gold": "0 1px 0 0 rgba(255, 255, 255, 0.5) inset, 0 -2px 0 0 rgba(0, 0, 0, 0.2) inset, 0 4px 14px rgba(0, 0, 0, 0.15)",
        "skeuo-inset": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05), inset 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "floating-nav": "0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(255, 255, 255, 0.9) inset",
      },
    },
  },
  plugins: [],
};

export default config;
