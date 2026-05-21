/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        // Editorial warm palette (per SEN Digital.html spec)
        bg: "#F4EFE4",
        "bg-2": "#ECE5D2",
        paper: "#FFFFFF",
        ink: "#15181E",
        "ink-2": "#2D323C",
        muted: "#6D7280",
        "muted-2": "#A1A6B0",
        blue: "#1E40AF",
        "blue-2": "#2A55D0",
        "blue-soft": "#DCE5F7",
        "blue-tint": "#EEF2FB",
        // legacy aliases (kept so older components don't break)
        primary: "#1E40AF",
        secondary: "#7C3AED",
        accent: "#22A06B",
        dark: "#15181E",
        light: "#F4EFE4",
        white: "#FFFFFF",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "system-ui", "sans-serif"],
        serif: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        editorial: "20px",
        "editorial-lg": "24px",
        "editorial-xl": "28px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
