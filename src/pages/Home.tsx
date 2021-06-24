import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { PageAuth } from '../styles/auth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const notifyError = () => toast.error('Room does not exists');

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

    if (!(await roomRef).exists()) {
      notifyError();
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
