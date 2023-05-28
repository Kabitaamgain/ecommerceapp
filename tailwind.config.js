/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#FBEBB5",
        secondary:"#FAF4F4",
        tertiory:"#FFF9E5",
        lightpink:"#F5F5F5",
        light :" #9F9F9F",
        black:"#000000"
      },
      fontSize:{
        '7xl':['64px',{
          lineHeight:'96px',
          fontWeight:'500'
        }],
        
        '4xl':['34px',{
          lineHeight:'54px',
          fontWeight:'500'
        }],

        '5xl':['60px',{
          lineHeight:'90px',
          fontWeight:'700'
        }],

        '6xl':['48px',{
          lineHeight:'72px',
        }],

       
        '2xl':['24px',{
          lineHeight:'36px',
          fontWeight:'500'
        }],

        'xl':['20px',{
          lineHeight:'30px',
        }],

        'base':['16px',{
          lineHeight:'24px',
          fontWeight:'500'
        }]

       
    },
   
    },

    container:{
      center:"true",
      padding:{
        DEAFULT:'1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6.25rem'
      }
      }
  },
  plugins: [],
}

