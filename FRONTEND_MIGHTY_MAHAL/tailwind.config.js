/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            fontFamily:{
                'sans': ['Inter', 'sans-serif'],
                'mono': ['Roboto Mono', 'monospace'],
            },
            colors:{
                'custom-gray': '#f2f4f6',
                gray:{
                    100:"#eeeeef",
                    200:"#e6e9ed",
                    600:"#95989c"
                },
                purple:{
                    200:"#d9ddee",
                    500:"#9492db",
                    600:"#7164c0",
                },
                white:{
                    100:"#fefeff",
                   
                },

                groundnut:{
                    100:"#B2A5FF"
                }
            }
        },
    },
    plugins:[],
}

