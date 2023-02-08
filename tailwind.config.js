{import('tailwindcss').Config} 


 



module.exports = {
 
  content: ['./views/*.ejs'],
  theme: {
    extend: {
      colors: {
       ' off-white': '#FDFBF7',
       'the-gray': '#6D7278'

      },
    },
  },
  screens:{
    sm:'480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },

  plugins: [require("daisyui")],


  daisyui: {
    themes: ["light"],
  },
}
