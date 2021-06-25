import styled from 'styled-components';

export const Container = styled.div`

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    min-height: 80vh;

    margin: 0 auto;

    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;

    a:nth-child(1) {
      text-decoration: none;
      color: ${(props) => props.theme.colors.pink};
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.purple};
    }
  }

`;
