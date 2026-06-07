import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0019FF",
          "blue-deep": "#0010CC",
          "blue-light": "#1a3bff",
          lime: "#C8FF00",
          "lime-dark": "#a0cc00",
          black: "#000000",
          "dark-1": "#050505",
          "dark-2": "#0a0a0f",
          "dark-3": "#0d0d1a",
          "gray-dim": "#1a1a2e",
          white: "#ffffff",
          "white-dim": "rgba(255,255,255,0.6)",
          "white-faint": "rgba(255,255,255,0.15)",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.75rem, 1.2vw, 1rem)",
        "fluid-base": "clamp(1rem, 1.5vw, 1.25rem)",
        "fluid-lg": "clamp(1.5rem, 2.5vw, 2rem)",
        "fluid-xl": "clamp(2rem, 4vw, 3.5rem)",
        "fluid-2xl": "clamp(3rem, 7vw, 6rem)",
        "fluid-3xl": "clamp(4rem, 10vw, 10rem)",
        "fluid-hero": "clamp(5rem, 14vw, 14rem)",
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        back: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      backgroundImage: {
        "gradient-hero": "radial-gradient(ellipse at center, #0a0a1a 0%, #000000 70%)",
        "gradient-blue": "linear-gradient(135deg, #000000 0%, #000d80 50%, #0019FF 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(0,25,255,0.1) 0%, rgba(0,0,0,0) 100%)",
        "gradient-lime": "linear-gradient(135deg, rgba(200,255,0,0.15) 0%, rgba(0,0,0,0) 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
