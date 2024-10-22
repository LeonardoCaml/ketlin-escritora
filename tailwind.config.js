/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins-bold', 'sans-serif'],
        'poppins-italic': ['Poppins-italic', 'sans-serif'],
        playfair: ['PlayfairDisplay', 'sans-serif'],
        'playfair-bold': ['PlayfairDisplay-bold', 'sans-serif'],
        'playfair-italic': ['PlayfairDisplay-italic', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
