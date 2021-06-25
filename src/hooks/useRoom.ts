/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { FirebaseQuestionsType } from '../@types/firebase-questions.d';
import { QuestionType } from '../@types/room.d';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestionsType = databaseRoom.questions ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => ({
        id: key,
        content: value.content,
        author: value.author,
        isHighlighted: value.isHighlighted,
        isAnswered: value.isAnswered,
        likeCount: Object.values(value.likes ?? {}).length,
        likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
      }));

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return { questions, title };
}
