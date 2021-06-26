import { Header } from '../../components/Header';
import { Container } from '../../styles/pages/contact';

export function Contact() {
  return (
    <Container>
      <Header />

      <main>
        Created by
        {' '}
        <a href="https://github.com/AntonioNarcilio">@AntonioNarcilio</a>
        {' '}
        Ft.
        {' '}
        <a href="https://rocketseat.com.br">Rocketseat</a>
      </main>
    </Container>
  );
}
