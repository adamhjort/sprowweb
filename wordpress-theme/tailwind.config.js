/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./template-parts/*.php",
    "./inc/*.php",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFF8E2",
        foreground: "#161616",
        primary: {
          DEFAULT: "#FF93AD",
          hover: "#FF7A9C",
          foreground: "#161616",
        },
        secondary: {
          DEFAULT: "#403E43",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F6F6F7",
          foreground: "#666666",
        },
      },
      fontFamily: {
        sans: ['Chakra Petch', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}