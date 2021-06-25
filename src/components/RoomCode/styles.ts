import styled from 'styled-components';

export const RoomCodeButton = styled.div`
  display: flex;
  height: 2.5rem;
  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.purple};
  cursor: pointer;

  transition: background-color 0.3s;

  div {
    background: ${(props) => props.theme.colors.purple};
    padding: 0 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s;
  }

  &:hover {
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.pink};

    div {
      background: ${(props) => props.theme.colors.pink};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 1rem 0 0.7rem;
    width: 13.5rem;
    font-size: 0.87rem;
    font-weight: 500;
  }
`;
