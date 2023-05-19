/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'btn-color': '#F9A51A',
        "blog-qst-color": '#ef4444',
        'blog-ans-color' : "#047857;"
      },
      fontFamily: {
        'blog-qus-font-family': 'monospace',
        'blog-qst-font-family' : 'sans-serif' 
      },
      brightness: {
        '65' : '65%'
      },
    },
  },
  daisyui : {
    themes : ['cupcake']
  },
  plugins: [require('daisyui')],
}

