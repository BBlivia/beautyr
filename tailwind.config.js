{import('tailwindcss').Config} 


 



module.exports = {
 
  content: ['./views/*.ejs'],
  theme: {
    extend: {
      colors: {
       ' off-white': '#FDFBF7'

      },
    },
  },

  plugins: [require("daisyui")],


  daisyui: {
    themes: ["light"],
  },
}
