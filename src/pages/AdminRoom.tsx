/* eslint-disable no-unused-vars */
import { useHistory, useParams } from 'react-router-dom';
// import { CustomHotToast } from '../components/CustomToast';
import { RoomParamsType } from '../@types/room.d';

import deleteImg from '../assets/images/delete.svg';

import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { PageRoom } from '../styles/pages/room';
import { Header } from '../components/Header';

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParamsType>();

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que  você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.replace('/');
  }

  return (
    <>
      <PageRoom>

        <Header roomId={roomId} closeRoom={handleEndRoom} />

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
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            ))}
          </div>

        </main>

        <footer>
          <div />
        </footer>
      </PageRoom>

      {/* <CustomHotToast  /> */}
    </>
  );
}
