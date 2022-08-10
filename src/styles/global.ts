import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  fieldset {all:unset};
  legend {all:unset};

  h1, h2, h3, h4, h5, h6, p {
    margin: unset;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem ${({ theme }) => theme.font.family}, sans-serif;
  }
`

export default GlobalStyles
