import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  .drop-button {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    cursor: pointer;

    border: 2px solid ${(props) => props.theme.colors.purple};
    border-radius: 50%;

    transition: all 0.3s;

    div {
      position: absolute;
      z-index: -1;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      > img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      > svg circle, svg path {
        fill: ${(props) => props.theme.colors.purple};
        stroke: ${(props) => props.theme.colors.purple};
      }
    }

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.pink};

      svg circle, svg path {
        fill: ${(props) => props.theme.colors.pink};
        stroke: ${(props) => props.theme.colors.pink};
      }
    }
  }

  .dropdown-content {
    display: none;

    position: absolute;
    z-index: 999;
    overflow: auto;

    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);

    min-width: 160px;
    border: 0;
    border-radius: 8px;

    top: 0;
    left: 0%;
    transform: translate(-37%, calc(100vh/15));

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.text};
      padding: 0.75rem 1rem;

      text-decoration: none;
      text-align: center;

      border: 0;
      background: none;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.white};

        a {
          color: ${(props) => props.theme.colors.white};
        }
      }

    }

    .theme-light {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      svg, svg path {
        width: 1.1rem;
        height: 1.1rem;
        fill: ${(props) => props.theme.colors.yellow};
        stroke: ${(props) => props.theme.colors.yellow};
      }

      &:hover {
        color: ${(props) => props.theme.colors.white};
        svg path {
          fill: ${(props) => props.theme.colors.white};
          stroke: ${(props) => props.theme.colors.white};
        }
      }
    }

    .theme-dark {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      svg, svg path {
        width: 1.1rem;
        height: 1.1rem;
        fill: ${(props) => props.theme.colors.primaryInverted};
      }

      &:hover {
        color: ${(props) => props.theme.colors.white};
        svg path {
          fill: ${(props) => props.theme.colors.white};
        }
      }
    }

    .login {
      color: ${(props) => props.theme.colors.green};

      &:hover {
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.text};
      }
    }

    .logoff {
      color: ${(props) => props.theme.colors.red};

      &:hover {
        background-color: ${(props) => props.theme.colors.red};
        color: ${(props) => props.theme.colors.white};
      }
    }


    .outlined {
      color: ${(props) => props.theme.colors.red};
      transition: all 0.3s;

      &:hover {
        background: ${(props) => props.theme.colors.red};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  .show {
    display: block;
  }
`;
