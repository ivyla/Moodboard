const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: "#DC2626",
            primary: "#236477",
            secondary: "#7cad3e",
            defaultBg: "#F4F4F4"
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
