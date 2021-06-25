/* eslint-disable no-unused-vars */
import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CustomToastError } from '../components/CustomToast';
import { RoomParamsType } from '../@types/room.d';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { ProfileDropDown } from '../components/ProfileDropdown';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { PageRoom } from '../styles/pages/room';
import { Header } from '../components/Header';

export function AdminRoom() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();
  const params = useParams<RoomParamsType>();
  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  const notifyError = () => toast.error('You must be logged in');

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

          <div className="question-list">
            {questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            ))}
          </div>

        </main>

        <footer>
          <div />
        </footer>
      </PageRoom>

      <CustomToastError />
    </>
  );
}
