/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
    content: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...colors,
            primary: '#0367A6',
            dark: '#1C1D26',
            drab: '#737373'
        },
        extend: {}
    },
    plugins: []
}
