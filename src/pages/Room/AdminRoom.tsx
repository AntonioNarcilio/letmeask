/* eslint-disable no-unused-vars */
import { useHistory, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { RoomParamsType } from '../../@types/room.d';

import { ReactComponent as DeleteImg } from '../../assets/images/delete.svg';
import { ReactComponent as CheckImg } from '../../assets/images/check.svg';
import { ReactComponent as AnswerImg } from '../../assets/images/answer.svg';
import emptyImg from '../../assets/images/empty-questions.svg';

import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';
import { PageRoom } from '../../styles/pages/room';
import { Header } from '../../components/Header';
import { ModalYesNoContext } from '../../contexts/ModalYesNoContext';

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParamsType>();

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const { handleDeleteQuestion, handleEndRoom } = useContext(ModalYesNoContext);

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

  return (
    <>
      <PageRoom>

        <Header roomId={roomId} closeRoom={() => handleEndRoom(roomId)} />

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
                <motion.div
                  key={question.id}
                  transition={{ delay: 0, duration: 0.5 }}
                  variants={{
                    show: { opacity: 1, x: '0' },
                    hidden: { opacity: 0, x: '-100%' },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <Question
                    key={question.id}
                    content={question.content}
                    author={question.author}
                    isAnswered={question.isAnswered}
                    isHighlighted={question.isHighlighted}
                  >
                    {!question.isAnswered && !question.isHighlighted && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      >
                        <CheckImg title="Marcar pergunta com respondida" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <AnswerImg title="Dar destaque à pergunta" />
                      </button>
                    </>
                    )}

                    {!question.isAnswered && question.isHighlighted && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      >
                        <CheckImg title="Marcar pergunta com respondida" />
                      </button>
                    </>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(question.id, roomId)}
                      className="button-delete"
                    >
                      <DeleteImg
                        title="Remover pergunta"
                      />
                    </button>
                  </Question>
                </motion.div>
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
