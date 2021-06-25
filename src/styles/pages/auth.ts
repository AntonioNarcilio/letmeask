import styled from 'styled-components';

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 128px 88px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 2.6rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: ${(props) => props.theme.colors.white};
    }
  }

  main {
    flex: 8;

    padding: 0 2.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    max-width: 320px;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 3.12rem;
        border-radius: 8px;
        padding: 0 16px;

        background: ${(props) => props.theme.colors.white};
        border: 1px solid ${(props) => props.theme.colors.gray};
        box-shadow: 0 4.5px ${(props) => props.theme.colors.gray};
        color: ${(props) => props.theme.colors.grayDark};

        outline: none;

        transition: all 0.3s;

        &:active, &:focus{
          background: ${(props) => props.theme.colors.gray};
          box-shadow: 0 4.5px ${(props) => props.theme.colors.grayDark};
          color: ${(props) => props.theme.colors.white};

          ::placeholder {
            color: ${(props) => props.theme.colors.white};
          }
        }
      }

      button {
        margin-top: 1rem;
      }

      button, input {
        width: 100%;
      }
    }

    p {
      font-size: 0.87rem;
      color: ${(props) => props.theme.colors.gray};
      margin-top: 1rem;

      a {
        color: ${(props) => props.theme.colors.pink};
      }
    }
  }

  .create-room {
    margin-top: 4rem;
    height: 3.12rem;
    border-radius: 8px;
    font-weight: 500;

    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 5px ${(props) => props.theme.colors.redShadow};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: all 0.3s;

    img {
      margin-right: 0.5rem;
    }

    &:hover {
      transform: translateY(3px);
      box-shadow: 0px 3px ${(props) => props.theme.colors.redShadow};
    }
  }

  .separator {
    font-size: 0.88rem;
    color: ${(props) => props.theme.colors.gray};

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${(props) => props.theme.colors.gray};
      margin-right: 1rem;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${(props) => props.theme.colors.gray};
      margin-left: 1rem;
    }
  }


`;
