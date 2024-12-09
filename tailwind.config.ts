import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1a8194",
        "primary-dark": "#4b5ed7",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
