import cx from 'classnames';
import { QuestionType } from '../../@types/question.d';
import { QuestionContent } from './style';

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionType) {
  return (
    <QuestionContent
      className={cx(
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered },
      )}
    >
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
