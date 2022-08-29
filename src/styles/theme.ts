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
    red: '#d73a49',
    shape: 'rgb(94, 99, 112)',
    gray400: '#333333',
    gray300: '#3B4D61',
    gray200: '#6B7B8C',
    gray150: '#CCCCCC',
    gray100: '#D9DBDF',
    gray50: '#F9FAFB'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
