import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.main.background};
    &, a {
      color: ${(props) => props.theme.colors.main.text};
      text-decoration: none;
    }
  }

  h2 {
    font-size: 4.188rem;
    line-height: 110%;  
  }

  h3 {
    font-size: 2.375rem;
    line-height: 120%;
  }

  h4 {
    font-size: 1.75rem;
  }

  h5 {
    font-size: 1.313rem;
    font-weight: normal;
  }

  h6 {
    font-size: 1.313rem;
    line-height: 150%;
  }

  p {
    font-size: 1.2rem;
    line-height: 150%;
  }

  hr {
    border-color: #BEBEBE;
    opacity: 0.5;
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

    h3 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 425px) {
    .hide-on-mobile {
      display: none !important;
    }
  }

  @media (min-width: 425px) {
    .only-on-mobile {
      display: none !important;
    }
  }
`
