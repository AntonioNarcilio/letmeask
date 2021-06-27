import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  position: relative;
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.57);
  width: 100%;
  max-width: 500px;

  padding: 2rem 3rem;
  border-radius: 6px;
  text-align: center;
  gap: 2rem;

  header {
    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.75rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.greenDark};
    }
  }

  main {
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;

    button {
      width: 75px;
      height: 40px;

      &:nth-child(1) {
        background: ${(props) => props.theme.colors.greenDark};
        box-shadow: 0 5px ${(props) => props.theme.colors.greenShadow};
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.3s;

        &:hover {
          transform: translateY(3px);
          box-shadow: 0 3px ${(props) => props.theme.colors.greenShadow};
        }
      }

      &:nth-child(2) {
        background: ${(props) => props.theme.colors.redDark};
        box-shadow: 0 5px ${(props) => props.theme.colors.redShadow};
        color: ${(props) => props.theme.colors.primary};
        transition: all 0.3s;

        &:hover {
          transform: translateY(3px);
          box-shadow: 0 3px ${(props) => props.theme.colors.redShadow};
        }
      }
    }
  }
`;
