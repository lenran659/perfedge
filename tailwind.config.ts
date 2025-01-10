import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        demo: ["DemoFont", "sans-serif"],
      },
      colors: {
        primary: "#1a8194",
        "primary-dark": "#4b5ed7",
        error: "#ef4444",
        default: "#e5e7eb",
        warning: "#eab308",
        success: "#22c55e",
        header: "#171717",
        p: "#2e2e2e",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("@tailwindcss/typography")],
} satisfies Config;
