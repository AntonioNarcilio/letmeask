import toast from 'react-hot-toast';
import { CustomHotToast } from '../CustomToast';

import { RoomCodeProps } from '../../@types/room-code.d';
import copyImg from '../../assets/images/copy.svg';

import { RoomCodeButton } from './styles';

export function RoomCode(props: RoomCodeProps) {
  const notifySuccess = () => toast.success('Código copiado', {
    id: 'clipboard',
  });

  function copyRoomCodeToClipboard() {
    // eslint-disable-next-line react/prop-types
    navigator.clipboard.writeText(props.code);
    notifySuccess();
  }

  return (
    <>
      <RoomCodeButton onClick={copyRoomCodeToClipboard} title="Copy room code">
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>
          Sala
          {' '}
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {props.code}
        </span>
      </RoomCodeButton>

      <CustomHotToast />
    </>
  );
}
