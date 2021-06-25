import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Custom scrollbar */

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: auto;
  }

  *::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 8px ;
    box-shadow: none;
    border: 2px solid ${(props) => props.theme.colors.primary};

    transition: all 1s;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.pink};
  }

  *::-webkit-scrollbar-thumb:active {
    background: ${(props) => props.theme.colors.cyan};
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
  }

  *::-webkit-scrollbar-corner {
    background: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }


`;
