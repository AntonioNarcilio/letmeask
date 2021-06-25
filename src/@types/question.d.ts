import { ReactNode } from 'react';

type QuestionType = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
}

export { QuestionType };
