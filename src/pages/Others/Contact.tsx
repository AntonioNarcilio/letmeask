import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { CustomHotToast } from '../../components/CustomToast';
import { Header } from '../../components/Header';
import { Container } from '../../styles/pages/contact';

export function Contact() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      toast('Você será redirecionado para a página anterior, aguarde...', {
        icon: '⌛',
      });
    }, 1000);

    setTimeout(() => {
      history.goBack();
    }, 6000);
  }, []);

  return (
    <>
      <Container>
        <Header />

        <main>
          Created by
          {' '}
          <a target="_blank" href="https://github.com/AntonioNarcilio" rel="noreferrer">@AntonioNarcilio</a>
          {' '}
          Ft.
          {' '}
          <a target="_blank" href="https://rocketseat.com.br" rel="noreferrer">Rocketseat</a>
        </main>
      </Container>

      <CustomHotToast />
    </>
  );
}
