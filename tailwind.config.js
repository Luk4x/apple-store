/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens
        },
        extend: {
            keyframes: {
                rocket: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(50px)' }
                }
            },
            animation: {
                rocket: 'rocket 3s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate'
            },
            fontFamily: {
                Poppins: ['Poppins', 'sans-serif']
            }
        }
    },
    plugins: []
};
