import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background: ${(props) => props.theme.colors.primary};

  main {
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
