import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10131A",
        "ink-soft": "#565D6D",
        "ink-faint": "#8A90A0",
        paper: "#FFFFFF",
        cream: "#F7F7F5",
        dark: "#0B0E14",
        "dark-soft": "#171B24",
        line: "#E4E7EC",
        "line-dark": "#262B36",
        accent: "#F4C10F",
        "accent-dim": "#D9A404",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
