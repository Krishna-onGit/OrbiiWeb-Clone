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
        background: "#080E0C", // Even darker, institutional forest black
        foreground: "#E2E8E4",
        brand: {
          DEFAULT: "#B4FF39", // The specific Orbii "Neon Yellow-Green"
          dark: "#8ACC28",
          muted: "rgba(180, 255, 57, 0.1)",
        },
        surface: "rgba(255, 255, 255, 0.02)",
        border: "rgba(255, 255, 255, 0.06)",
        secondary: {
          DEFAULT: "#8A918E",
          muted: "#3E4542",
        },
      },
      backgroundImage: {
        "orbii-glow": "radial-gradient(circle at 50% 0%, rgba(180, 255, 57, 0.08) 0%, transparent 70%)",
        "vertical-beams": "linear-gradient(90deg, transparent 0%, rgba(180, 255, 57, 0.02) 50%, transparent 100%)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        'orbii': '12px',
      }
    },
  },
  plugins: [],
};

export default config;
