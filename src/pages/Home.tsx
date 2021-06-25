import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { CustomHotToast } from '../components/CustomToast';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { PageAuth } from '../styles/pages/auth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    // user is not authenticate?
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    // input is empty?
    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = database.ref(`rooms/${roomCode}`).get();
    // room not exist ?
    if (!(await roomRef).exists()) {
      toast.error('Sala não existe!');
      return;
    }
    // room is close ?
    if ((await roomRef).val().endedAt) {
      toast.error('Sala fechada pelo admin');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <>
      <PageAuth>
        <aside>
          <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas de sua audiências em tempo-real</p>
        </aside>

        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <button onClick={handleCreateRoom} type="button" className="create-room">
              <img src={googleIconImg} alt="logo do google" />
              Crie sua sala com o Google
            </button>

            <div className="separator">ou entre em uma sala</div>
            <form onSubmit={handleJoinRoom}>
              <input
                type="text"
                placeholder="Digite o código da sala"
                onChange={(event) => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
          </div>
        </main>
      </PageAuth>

      <CustomHotToast />
    </>
  );
}
