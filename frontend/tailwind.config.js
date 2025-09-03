/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#001f3f", // dark navy
          800: "#002b5c", // lighter navy
        },
      },
    },
  },
};
