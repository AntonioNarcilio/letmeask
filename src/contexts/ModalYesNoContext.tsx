/* eslint-disable no-unused-vars */
import {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { database } from '../services/firebase';

type modalType = 'endRoom' | 'removeQuestion' | '';
type StatusType = true | false;

interface ModalContextData {
  closeModalYesNo: (status: boolean, typeModal: modalType) => void;
  addTextInModalYesNo: (
    parameterTitle: string,
    parameterMain: string,
  ) => void;
  handleDeleteQuestion: (roomId: string, questionId: string) => void;
  handleEndRoom: (roomId: string) => void;
  modalTitleHeader: string;
  modalTitleMain: string;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalYesNoContext = createContext({} as ModalContextData);

export function ModalYesNoProvider({ children }: ModalProviderProps) {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitleHeader, setModalTitleHeader] = useState('');
  const [modalTitleMain, setModalTitleMain] = useState('');
  const [isRemoveQuestion, setIsRemoveQuestion] = useState<StatusType>(false);
  const [isEndRoom, setIsEndRoom] = useState<StatusType>(false);
  const [parameterRoomId, setParameterRoomId] = useState('');
  const [parameterQuestionId, setParameterQuestionId] = useState('');
  const [defineModalType, setDefineModalType] = useState<modalType>();

  // function openModalYesNo(id:string) {
  //   setIsModalOpen(true);
  //   setParameterId(id);
  // }

  function closeModalYesNo(status: boolean, typeModal: modalType) {
    // console.log(typeModal);
    if (typeModal === 'removeQuestion') {
      setIsRemoveQuestion(status);
    }
    if (typeModal === 'endRoom') {
      setIsEndRoom(status);
    }

    setIsModalOpen(false);
  }

  function addTextInModalYesNo(
    parameterName: string,
    parameterTitle: string,
  ) {
    setModalTitleHeader(parameterName);
    setModalTitleMain(parameterTitle);
  }

  function resetStatus() {
    setIsRemoveQuestion(false);
    setIsEndRoom(false);
    setDefineModalType('');
  }

  function handleDeleteQuestion(questionId: string, roomId: string) {
    setDefineModalType('removeQuestion');
    setIsModalOpen(true);
    setParameterQuestionId(questionId);
    setParameterRoomId(roomId);
    addTextInModalYesNo('Exclui pergunta', 'Tem certeza que  você deseja excluir esta pergunta?');
  }

  function handleEndRoom(roomId: string) {
    setDefineModalType('endRoom');
    setIsModalOpen(true);
    setParameterRoomId(roomId);
    addTextInModalYesNo('Encerrar sala', 'Tem certeza que você deseja encerrar esta sala?');
  }

  useEffect(() => {
    if (isRemoveQuestion) {
      // console.log('Remover pergunta');
      // console.log(isRemoveQuestion, parameterRoomId, parameterQuestionId);
      database.ref(`rooms/${parameterRoomId}/questions/${parameterQuestionId}`).remove();
    }

    if (isEndRoom) {
      // console.log('Encerrar sala');
      // console.log(isEndRoom, parameterRoomId);
      database.ref(`rooms/${parameterRoomId}`).update({
        endedAt: new Date(),
      });

      history.replace('/');
    }

    resetStatus();
  }, [isRemoveQuestion, isEndRoom]);

  return (
    <ModalYesNoContext.Provider
      value={{
        closeModalYesNo,
        addTextInModalYesNo,
        handleDeleteQuestion,
        handleEndRoom,
        modalTitleHeader,
        modalTitleMain,
      }}
    >
      {children}
      {/* @ts-ignore */}
      {isModalOpen && <Modal typeModal={defineModalType} /> }
    </ModalYesNoContext.Provider>
  );
}
