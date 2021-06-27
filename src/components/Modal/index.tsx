import { useContext } from 'react';
import { ModalYesNoContext } from '../../contexts/ModalYesNoContext';
import { Button } from '../Button';
import { Overlay, Container } from './style';

type modalType = 'endRoom' | 'removeQuestion';

// @ts-ignore
export function Modal({ typeModal }: modalType | undefined) {
  const {
    modalTitleHeader, modalTitleMain, closeModalYesNo,
  } = useContext(ModalYesNoContext);

  return (
    <Overlay>
      <Container>
        <header>
          <p>{modalTitleHeader}</p>
        </header>

        <main>
          <p>{modalTitleMain}</p>
        </main>

        <footer>
          {typeModal === 'endRoom' && (
            <>
              <Button type="button" onClick={() => closeModalYesNo(true, 'endRoom')}>
                Sim
              </Button>
              <Button type="button" onClick={() => closeModalYesNo(false, 'endRoom')}>
                Não
              </Button>
            </>
          )}
          {typeModal === 'removeQuestion' && (
            <>
              <Button type="button" onClick={() => closeModalYesNo(true, 'removeQuestion')}>
                Sim
              </Button>
              <Button type="button" onClick={() => closeModalYesNo(false, 'removeQuestion')}>
                Não
              </Button>
            </>
          )}
        </footer>
      </Container>
    </Overlay>
  );
}
