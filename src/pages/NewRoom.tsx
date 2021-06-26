import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import illustrationImg from '../assets/images/illustration.svg';
import { ReactComponent as LogoDarkSvg } from '../assets/images/logo-dark.svg';
import { ReactComponent as LogoWhiteSvg } from '../assets/images/logo-white.svg';

import { PageAuth } from '../styles/pages/auth';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const { theme } = useTheme();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    // input is empty?
    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    // directing user to the created room
    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiências em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          {theme.title === 'dracula' ? (
            <LogoWhiteSvg title="Letmeask" />
          ) : (
            <LogoDarkSvg title="Letmeask" />
          )}
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
            <p>
              Quer entrar em uma sala existente?
              {' '}
              <Link to="/">Clique aqui</Link>
            </p>
          </form>
        </div>
      </main>
    </PageAuth>
  );
}
