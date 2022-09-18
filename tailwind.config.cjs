/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                '2esm': '200px',
                // => @media (min-width: 200px) { ... }
                'esm': '245px',
                // => @media (min-width: 245px) { ... }
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
