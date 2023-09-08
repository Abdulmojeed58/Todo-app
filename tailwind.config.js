/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          "gray-bg": "var(--gray-200)",
          "text-gray": "var(--text-gray)",
          "bg-gray": "var(--gray-50)",
          "border-gray": "var(--gray-300)",
          "border-gray-200": "var(--gray-200)",
          "blue": "var(--blue)",
          "text-light": "var(--text-light)",
          "text-primary": "var(--text-primary)",
        },
      },
      fontFamily: {
        inter: "inter",
      },
    },
  },
  plugins: [],
};
