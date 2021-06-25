type FirebaseQuestionsType = Record<string, {
  author: {
    name: string,
    avatar: string
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>

export { FirebaseQuestionsType };
