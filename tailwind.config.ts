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
        // Web3 Dark Theme
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary colors
        primary: {
          DEFAULT: "#8B5CF6",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        // Secondary/Accent colors
        accent: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        // Dark backgrounds
        dark: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Glow colors for effects
        glow: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          pink: "#EC4899",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "web3-gradient": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)",
        "web3-gradient-dark": "linear-gradient(135deg, #4C1D95 0%, #1E3A8A 50%, #164E63 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(268,82%,58%,0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(217,91%,60%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(268,82%,58%,0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(217,91%,60%,0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(268,82%,58%,0.2) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(217,91%,60%,0.2) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px var(--glow-color)",
        "glow-md": "0 0 25px -5px var(--glow-color)",
        "glow-lg": "0 0 35px -5px var(--glow-color)",
        "glow-purple": "0 0 30px -5px rgba(139, 92, 246, 0.5)",
        "glow-blue": "0 0 30px -5px rgba(59, 130, 246, 0.5)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center"
          }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(139, 92, 246, 0.4)"
          },
          "50%": {
            "box-shadow": "0 0 40px rgba(139, 92, 246, 0.8)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-20px)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cabinet)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
