module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        light: '#B3E5FC',
        default: '#03A9F4',
        dark: '#0288D1',
      },
      accent: {
        light: '#B2EBF2',
        default: '#00BCD4',
        dark: '#0097A7',
      },
      back: {
        light: '#FFFFFF',
        default: '#DEDEDE',
        dark: '#BDBDBD',
      },
    },
    extend: {
      spacing: {
        half: '0.5vh',
        100: '24rem',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
