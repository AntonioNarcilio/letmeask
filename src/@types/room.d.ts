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
  likeCount: number;
  likeId: string | undefined;
}

export { RoomParamsType, QuestionType };
