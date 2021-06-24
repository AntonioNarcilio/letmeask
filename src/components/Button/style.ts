import styled from 'styled-components';

export const MyButton = styled.button`
  height: 3.12rem;
  border-radius: 8px;
  font-weight: 500;

  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0 5px ${(props) => props.theme.colors.purpleShadow};

  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: all 0.3s;

  img {
    margin-right: 0.5rem;
  }

  &:not(:disabled):hover {
    transform: translateY(3px);
    box-shadow: 0 3px ${(props) => props.theme.colors.purpleShadow};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
