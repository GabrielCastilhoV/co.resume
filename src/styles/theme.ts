export default {
  font: {
    family: "Inter, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xxs: '0.8rem',
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      huge: '3.5rem'
    }
  },
  colors: {
    dark: '#000',
    white: '#fff',
    green: '#00CD98',
    grey400: '#0A132A',
    grey200: '#747886',
    grey150: '#D9DBDF',
    grey100: '#E3E7EE',
    grey75: '#EFF2F5',
    grey50: '#F9FAFB'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
