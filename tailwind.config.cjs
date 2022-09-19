/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'esm': '200px',
                '2esm': '245px',
                '3esm': '512px',
                '4esm': '600px',
                // 'sm': '640px',
                '2sm': '710px',
                // 'md': '768px',
                '3sm': '890px',
                // 'lg': '1024px',
                '2lg': '1140px',
                // 'xl': '1280px',
                // '2xl': '1536px',
                '3xl': '1970px',
                '4xl': '2300px',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
