import { createGlobalStyle } from 'styled-components'
import { size } from './breakpoints'

const GlobalStyles = createGlobalStyle`
    /* CSS VARIABLE */
  :root {
    /* COLORS VARIABLE */
    --background-color-primary: #050410;
    ---font-color-primary: #3f70f3;
    --font-color-secondary: #fff;

    /* BREAKING POINTS */
    --mobileS: ${size.mobileS};
    --mobileM: ${size.mobileM};
    --mobileL: ${size.mobileL};
    --tabletS: ${size.tabletS};
    --tabletM: ${size.tabletM};
    --tabletL: ${size.tabletL};
    --desktopS: ${size.desktopS};
    --desktopM: ${size.desktopM};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100vh;

    background-color: var(--background-color-primary);
  }

  body {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--font-color-secondary);
  }

  a {
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyles
