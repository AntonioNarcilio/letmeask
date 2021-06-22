import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ::-webkit-scrollbar {
      width: 0px;
  } */

  body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }


`;
