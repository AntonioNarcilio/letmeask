import logoImg from '../../assets/images/logo.svg';
import { ProfileDropDown } from '../ProfileDropdown';
import { RoomCode } from '../RoomCode';
import { MyHeader } from './style';

type HeaderProps = {
  // eslint-disable-next-line react/require-default-props
  roomId?: string;
}

export function Header(props: HeaderProps) {
  const { roomId } = props;
  return (
    <MyHeader>
      <div className="content">
        <img src={logoImg} title="Logo letmeask" alt="letmeask" />
        <div>
          {roomId
          && <RoomCode code={roomId} />}

          <ProfileDropDown />
        </div>
      </div>
    </MyHeader>
  );
}
