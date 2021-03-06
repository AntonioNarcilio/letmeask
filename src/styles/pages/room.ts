import styled from 'styled-components';

export const PageRoom = styled.div`

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.text};
      }

      span {
        margin-left: 1rem;
        background: ${(props) => props.theme.colors.pink};
        border-radius: 8px;
        padding: 0.5rem 1rem;
        color: ${(props) => props.theme.colors.white};
        font-weight: 500;
        font-size: 0.87rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 8px;
        background: ${(props) => props.theme.colors.textArea};
        color: ${(props) => props.theme.colors.primaryInverted};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        resize: vertical;
        min-height: 8.12rem;

        outline-color: ${(props) => props.theme.colors.purple};
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }

          > span {
            margin-left: 8px;
            color: ${(props) => props.theme.colors.text};
            font-weight: 500;
            font-size: 0.87rem;
          }
        }

        span {
          font-size: 0.87rem;
          color: ${(props) => props.theme.colors.grayDark};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${(props) => props.theme.colors.purple};
            text-decoration: underline;
            font-size: 0.87rem;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 1.5rem;
    }

    .empty-questions {
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      img {
        padding: 1rem;
      }

      h1 {
        color: ${(props) => props.theme.colors.text};
        font-family: 'Poppins', sans-serif;
        font-size: 1.12rem;
      }

      p {
        width: 40%;
        color: ${(props) => props.theme.colors.comment};
        font-family: 'Roboto', sans-serif;
        font-size: 0.87rem;
        text-align: center;
      }
    }
  }

  footer {
    width: 100%;
    min-height: 10vh;
  }

`;
