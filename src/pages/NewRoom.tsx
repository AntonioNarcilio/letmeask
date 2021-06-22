import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { PageAuth } from '../styles/auth';
import { Button } from '../components/Button';

export function NewRoom() {
  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiências em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
            <p>
              Quer entrar em uma sala existente?
              {' '}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Clique aqui</a>
            </p>
          </form>
        </div>
      </main>
    </PageAuth>
  );
}
