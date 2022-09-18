/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'esm': '200px',
                // => @media (min-width: 200px) { ... }
                '2esm': '245px',
                // => @media (min-width: 245px) { ... }
                '3esm': '512px',
                // => @media (min-width: 512px) { ... }
                '4esm': '600px',
                // => @media (min-width: 600px) { ... }
                '2sm': '710px',
                // => @media (min-width: 7100px) { ... }
                '2lg': '1140px',
                // => @media (min-width: 11405px) { ... }
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
