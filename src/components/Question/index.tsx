import { QuestionType } from '../../@types/question.d';
import { QuestionContent } from './style';

export function Question({ content, author, children }:QuestionType) {
  return (
    <QuestionContent>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </QuestionContent>
  );
}
