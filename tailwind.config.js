/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      fontFamily: {
        'pop': ['Poppins'],
        'mon': ['Montserrat'],
      },
      colors: {
        'blk': '#383838',
        'reed': '#F46B5B',
        'oldG': '#A7A7A7',
        'gry': '#D0D0D2',
        'purpal': '#BB6BD9',
        'ylo': '#FFD687',
        'whit': '#FAFAFA',
        'blu': '#2D9CDB',
        'input': 'rgba(208, 208, 210, 0.25)',
        'reed5': 'rgba(244, 107, 91, 0.09)',
        'cupon': 'rgba(228, 224, 218, 0.25)',
        
      },
      fontSize: {
        "56": '56px',
        "24": '24px',
        "48": '48px',
        "32": '32px',
        
      },
      spacing: {
        '46': '46%',
        '54': '54%',
        '512': '512px',
        '544': '544px',
        '312': '312px',
        '376': '376px',
        '320': '320px',
        '43': '43px',
        '70': '70px',

      },
      borderRadius: {
        '32': '32px',
      }
    },
  },
  plugins: [],
}

