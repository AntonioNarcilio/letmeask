import { FormEvent, useEffect, useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import { FirebaseQuestionsType } from '../@types/firebase-questions.d';
import { QuestionType, RoomParamsType } from '../@types/room.d';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { PageRoom } from '../styles/room';

export function Room() {
  const history = useHistory();
  const { user, signInWithGoogle, signOut } = useAuth();
  const params = useParams<RoomParamsType>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');

  const roomId = params.id;

  const notifyError = () => toast.error('You must be logged in');

  async function handleSignInGoogle() {
    // user is not authenticate?
    if (!user) {
      await signInWithGoogle();
    }

    history.push(`${roomId}`);
  }

  function signOutAccount() {
    // user is not authenticate?
    if (user) {
      signOut();
    }

    history.replace('/');
  }

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
      }));

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    });
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    // textarea is empty?
    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      notifyError();
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },

      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
  }

  return (
    <>
      <PageRoom>
        <header>
          <div className="content">
            <img src={logoImg} alt="letmeask" />
            <RoomCode code={roomId} />
          </div>

          <button type="button" onClick={signOutAccount}>sair</button>

        </header>

        <main className="content">
          <div className="room-title">
            <h1>
              Sala
              {' '}
              {title}
            </h1>
            {questions.length > 0 && (
            <span>
              {questions.length}
              {' '}
              {questions.length === 1 ? 'pergunta' : 'perguntas'}
            </span>
            )}

          </div>

          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="O que você quer perguntar?"
              onChange={(event) => setNewQuestion(event.target.value)}
              value={newQuestion}
            />

            <div className="form-footer">
              { user
                ? (
                  <div className="user-info">
                    <img src={user.avatar} alt={user.name} />
                    <span>{user.name}</span>
                  </div>
                ) : (
                  <span>
                    Para enviar uma pergunta,
                    {' '}
                    <button type="button" onClick={handleSignInGoogle}>faça seu login.</button>
                  </span>
                )}
              <Button type="submit" disabled={!user}>Enviar pergunta</Button>
            </div>
          </form>

          {JSON.stringify(questions)}
        </main>
      </PageRoom>

      <Toaster
        toastOptions={{
          error: {
            style: {
              background: 'white',
              color: 'black',
            },
          },
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
            }}
          />
        )}
      </Toaster>
    </>
  );
}
