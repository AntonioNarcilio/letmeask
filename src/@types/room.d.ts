type RoomParamsType = {
  id: string;
}

type QuestionType = {
  id: string;
  author: {
    name: string,
    avatar: string
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

export { RoomParamsType, QuestionType };
