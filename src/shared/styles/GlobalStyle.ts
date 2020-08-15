import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  &:root {
    --primary: #252525;
    --white: #fbfbfb;
    --brand: palevioletred;

    /* Fonts */
    --sans: 'Inter', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  svg {
    overflow: visible;
  }
`;

export default GlobalStyle;
