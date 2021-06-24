import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  width: 2.2rem;
  height: 2.2rem;
  margin-left: 2rem;

  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.purple};

  .drop-button {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    cursor: pointer;

    /* &:hover, &:focus {
      background-color: #2980B9;
    } */
    div {
      position: absolute;
      z-index: -1;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      svg circle, svg path {
        fill: ${(props) => props.theme.colors.purple};
        stroke: ${(props) => props.theme.colors.purple};
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
    left: 50%;
    transform: translate(-50%, calc(100vh/15));

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.text};
      padding: 0.75rem 1rem;

      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.white};
      }
    }

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

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  .show {
    display: block;
  }

`;
