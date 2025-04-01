/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#bab8ba',
        'background': '#000000',
        'primary': '#7323ff',
        'secondary': '#8d1559',
        'accent': '#1c1c1c',
        'divs': '#1f2124',
        'submenu': '#707B7C',
        'atributo': '#3f3f46',
      },
      maxWidth: {
        '32rem': '32rem', // Personalizado para 32 rem
      },

     
    
  

      borderRadius: {
        'custom1': '32px 64px',  // Aplica a todas las esquinas (simplificado)
        'custom-tl': '32px',     // Top left
        'custom-tr': '64px',     // Top right
        'custom-br': '32px',     // Bottom right
        'custom-bl': '64px',     // Bottom left
      },
    },
  },
  plugins: [
],
}
    

