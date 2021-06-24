type FirebaseQuestionsType = Record<string, {
  author: {
    name: string,
    avatar: string
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

export { FirebaseQuestionsType };
