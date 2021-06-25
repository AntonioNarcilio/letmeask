/* eslint-disable no-unused-vars */
import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { CustomHotToast } from '../components/CustomToast';
import { RoomParamsType } from '../@types/room.d';

import { ReactComponent as LikeImg } from '../assets/images/like.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { PageRoom } from '../styles/pages/room';
import { Header } from '../components/Header';

export function Room() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();
  const params = useParams<RoomParamsType>();
  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  const notifyError = () => toast.error('Você deve estar logado');

  async function handleSignInGoogle() {
    // user is not authenticate?
    if (!user) {
      await signInWithGoogle();
    }

    history.push(`${roomId}`);
  }

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

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <>
      <PageRoom>
        <Header roomId={roomId} />

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

          <div className="question-list">
            {questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  className={`like-button ${question.likeId ? 'liked' : ''}`}
                  type="button"
                  aria-label="Marcar como gostei"
                  onClick={() => handleLikeQuestion(question.id, question.likeId)}
                  disabled={!user}
                >
                  { question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <LikeImg />
                </button>
              </Question>
            ))}
          </div>

        </main>

        <footer>
          <div />
        </footer>

      </PageRoom>

      <CustomHotToast />
    </>
  );
}
