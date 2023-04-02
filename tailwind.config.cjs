/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#161A1D",
                secondary: "#89B0AE",
                terniary: "#F8961E",
                dark: "#000814",
                light: "#eaf4f4",
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
