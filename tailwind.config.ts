import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "#2563EB",
      },
      backgroundColor: {
        primary: "#000000",
        secondary: "bg-zinc-900",
      },
    },
  },
  plugins: [],
};
export default config;
