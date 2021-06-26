/* eslint-disable no-unused-vars */
import { useHistory, useParams } from 'react-router-dom';
// import { CustomHotToast } from '../components/CustomToast';
import { RoomParamsType } from '../@types/room.d';

import { ReactComponent as DeleteImg } from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import emptyImg from '../assets/images/empty-questions.svg';

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

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
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
              Sala:
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

          {questions.length > 0 ? (
            <div className="question-list">
              {questions.map((question) => (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        title="Marcar pergunta com respondida"
                        alt="Marcar pergunta com respondida"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img
                        src={answerImg}
                        title="Dar destaque à pergunta"
                        alt="Dar destaque à pergunta"
                      />
                    </button>
                  </>
                  )}

                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <DeleteImg
                      title="Remover pergunta"
                    />
                  </button>
                </Question>
              ))}
            </div>
          ) : (
            <div className="empty-questions">
              <img src={emptyImg} alt="Nenhuma mensagem existente" />
              <h1>Nenhuma pergunta por aqui...</h1>
              <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
            </div>
          )}

        </main>

        <footer>
          <div />
        </footer>
      </PageRoom>

    </>
  );
}
