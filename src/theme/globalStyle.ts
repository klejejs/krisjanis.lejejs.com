import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, h1, h2, h3, h4, h5, h6 {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-weight: 700;
  }
  
  body {
    margin: 0;
  }
`;

export default GlobalStyle;
