import styled from 'styled-components';

export const MyHeader = styled.div`
  padding: 1.5rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgb(242, 89, 249), rgb(131, 90, 253)) 0 1 100%;

  .content {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 2.81rem;
    }

    > div {
      display: flex;
      gap: 2rem;
    }
  }
`;
