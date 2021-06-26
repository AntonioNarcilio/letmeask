import toast from 'react-hot-toast';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import loadingAnimation from '../../assets/animations/404-space-error.json';
import { CustomHotToast } from '../../components/CustomToast';
import Container from '../../styles/pages/notfound';

export function NotFound() {
  const history = useHistory();
  // Redirecionando para a pagina home
  useEffect(() => {
    toast.error('Pagina não encontrada!');

    setTimeout(() => {
      toast('Você será redirecionado para a página inicial, aguarde...', {
        icon: '⌛',
      });
    }, 1000);

    setTimeout(() => {
      // replace: não adiciona uma nova entrada url (nao add a rota no caminho)
      history.replace('/');
    }, 6000);
  }, []);

  return (
    <>
      <Container>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: loadingAnimation,
          }}
          width={700}
        />
      </Container>

      <CustomHotToast />
    </>
  );
}
