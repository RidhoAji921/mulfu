/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      screens: {
        'mobile': '360px',
        'desktop': '1440px',
      },
      colors: {
        'textTitleColor': '#703D80',
        'purpleScale60': '#5A3E74',
        'purpleScale50': '#7E57A3',
        'purpleScale80': '#24192E',
        'purpleScale90': '#120C17',
        'purpleScale0': '#FFFFFF',
        'grey/60': '#8E8E8E',
        'borderColor': '#24192E',
        'hoverColor': '#5A3E74',
        'StatusSuccess': '#56C63A',
        'StatusFailed': '#AC5D5D',
        'StatusProcess': '#D4C434',
        'ButtonPurple': '#7E57A3',
        'ButtonRed': '#AC5D5D',
      },
      fontSize: {
        'header1/Desktop': ['48px', '72px'],
        'header2/Desktop': ['40px', '60px'],
        'header3/Desktop': ['32px', '48px'],
        'header4/Bold': ['24px', '36px'],
        'font26': '26px',
        'Large/Reguler': ['20px', '24.2px'],
        'Large/SemiBold': ['20px', '24.2px'],
        'Large/Bold': ['20px', '30px'],
        'Base/Bold': ['16px', '24px'],
        'Base/Medium': ['16px', '24px'],
        'Base/Regular': ['16px', '19.4px'],
        'Small/Regular': ['12px', '14.5px'],
        'Small/Small': ['14px', '16.9px'],
        'HeaderFitur': ['26px', '31px'],
        'CashoutCardStatus': ["20px", "24px"],
        'CashoutCard': ["16px", "19px"],
        'CashoutCardPrice' : ["24px", "29px"],
        'CashoutCardInfo' : ["14px", "17px"],
        'CashoutCardButton' : ["12px", "15px"],
      },
      spacing: {
        '120px': '120px',
        '60px': '60px',
      },
      fontFamily: {
        'poppins': ['poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}

