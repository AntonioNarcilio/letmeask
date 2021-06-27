import styled from 'styled-components';

export const QuestionContent = styled.div`
  background: ${(props) => props.theme.colors.questionBackground};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  margin-top: 0.5rem;

  p {
    color: ${(props) => props.theme.colors.text};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: ${(props) => props.theme.colors.text};
        font-weight: 500;
        font-size: 0.87rem;
      }
    }

    > div {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      svg path {
        transition: all 0.3s;
      }
      &:nth-child(1) {
        &:hover {
          svg path, circle {
            stroke: ${(props) => props.theme.colors.green};
          }
        }
      }
      &:nth-child(2) {
        &:hover {
          svg path {
            stroke: ${(props) => props.theme.colors.yellow};
          }
        }
      }
      &:nth-child(3) {
        &:hover {
          svg path {
            stroke: ${(props) => props.theme.colors.red};
          }
        }
      }

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${(props) => props.theme.colors.comment};
        gap: 0.5rem;

        transition: filter 0.2s;

        &.liked {
          color: ${(props) => props.theme.colors.purple};

          svg path {
            stroke: ${(props) => props.theme.colors.purple};
          }
        }

        &:not(:disabled):hover {
          filter: brightness(0.5);
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }

  &.highlighted {
    background: ${(props) => props.theme.colors.highlighted};
    border: 2px solid ${(props) => props.theme.colors.purple};

    footer button {
      svg path, circle {
        stroke: ${(props) => props.theme.colors.purple};
      }
    }
  }

  &.answered {
    background: ${(props) => props.theme.colors.gray};
    p, footer img, footer span {
      filter: grayscale(1) opacity(0.4);
    }

    footer button {
      svg path {
        stroke: ${(props) => props.theme.colors.highlighted};
      }
      &:hover {
        svg path {
          stroke: ${(props) => props.theme.colors.red};
        }
      }
    }
  }
`;
