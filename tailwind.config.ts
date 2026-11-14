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
          50: "#F0F4FE",
          100: "#DBE6FD",
          200: "#BFD3FB",
          300: "#93B5F8",
          400: "#608EF5",
          500: "#3A68EE",
          600: "#2046DE",
          700: "#1331BE",
          800: "#02146B", // Exact signature logo royal blue
          900: "#001162", // Deep logo royal navy
          950: "#000B3B", // Midnight navy base
        },
        forest: {
          DEFAULT: "#02146B",
          dark: "#001162",
          deep: "#000B3B",
        },
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FEC401", // Exact vibrant logo gold
          500: "#E5AD00",
          600: "#C48D00",
          700: "#996900",
          800: "#784F00",
          900: "#5D3A00",
        },
        accent: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FEC401", // Exact vibrant logo gold
          500: "#E5AD00",
          600: "#C48D00",
          700: "#996900",
          800: "#784F00",
          900: "#5D3A00",
        },
        charcoal: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
          muted: "#64748B",
        },
        surface: {
          ivory: "#F8FAFC",
          neutral: "#F1F5F9",
          border: "#E2E8F0",
          card: "#FFFFFF",
        },
        sand: {
          50: "#F8FAFC", // Cool ivory
          100: "#F1F5F9", // Soft neutral
          200: "#E2E8F0",
          300: "#CBD5E1",
        },
        slate: {
          600: "#64748B",
          700: "#475569",
          800: "#1E293B",
          900: "#0F172A",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -1px rgba(0, 0, 0, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 25px -4px rgba(0, 17, 98, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.04)",
        lift: "0 20px 35px -8px rgba(0, 17, 98, 0.15)",
        skeuo: "inset 0 1px 0 0 #FFFFFF, inset 0 2px 0 0 rgba(255, 255, 255, 0.7), inset 0 -1px 0 0 rgba(0, 0, 0, 0.06), 0 6px 20px -3px rgba(2, 20, 107, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
        "skeuo-card": "inset 0 1px 0 0 #FFFFFF, inset 0 2px 0 0 rgba(255, 255, 255, 0.7), inset 0 -1px 0 0 rgba(0, 0, 0, 0.06), 0 6px 20px -3px rgba(2, 20, 107, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
        "skeuo-card-hover": "inset 0 1px 0 0 #FFFFFF, inset 0 2px 0 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 0 rgba(0, 0, 0, 0.06), 0 20px 38px -6px rgba(2, 20, 107, 0.18), 0 6px 14px rgba(0, 0, 0, 0.05)",
        "skeuo-dark": "inset 0 1px 0 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 0 rgba(0, 0, 0, 0.45), 0 16px 36px -4px rgba(0, 11, 59, 0.55)",
        "skeuo-button": "inset 0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 0 rgba(0, 0, 0, 0.35), 0 4px 14px rgba(0, 0, 0, 0.2)",
        "skeuo-gold": "inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -2px 0 0 rgba(0, 0, 0, 0.22), 0 5px 16px rgba(254, 196, 1, 0.38)",
        "skeuo-medallion": "inset 0 1px 0 0 rgba(255, 255, 255, 0.4), inset 0 -2px 0 0 rgba(0, 0, 0, 0.35), 0 6px 14px -2px rgba(2, 20, 107, 0.25)",
        "skeuo-inset": "inset 0 2px 5px 0 rgba(0, 0, 0, 0.06), inset 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        "skeuo-recessed": "inset 0 2px 5px 0 rgba(0, 0, 0, 0.07), inset 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 0 0 rgba(255, 255, 255, 0.85)",
        "skeuo-tag-gold": "inset 0 1px 0 0 rgba(255, 255, 255, 0.65), inset 0 -1px 0 0 rgba(0, 0, 0, 0.18), 0 2px 6px rgba(254, 196, 1, 0.32)",
        "floating-nav": "0 12px 30px -4px rgba(0, 11, 59, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
