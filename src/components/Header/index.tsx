import { HeaderProps } from '../../@types/header.d';

import logoImg from '../../assets/images/logo.svg';

import { ProfileDropdown } from '../ProfileDropdown';
import { RoomCode } from '../RoomCode';
import { MyHeader } from './style';

export function Header(props: HeaderProps) {
  const { roomId } = props;
  const { closeRoom } = props;

  return (
    <MyHeader>
      <div className="content">
        <img src={logoImg} title="Logo letmeask" alt="letmeask" />
        <div>
          {roomId
          && <RoomCode code={roomId} />}
          {closeRoom ? <ProfileDropdown adminCloseRoom={closeRoom} /> : <ProfileDropdown />}

        </div>
      </div>
    </MyHeader>
  );
}
