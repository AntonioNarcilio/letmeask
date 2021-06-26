import { HeaderProps } from '../../@types/header.d';

import { ReactComponent as LogoDarkSvg } from '../../assets/images/logo-dark.svg';
import { ReactComponent as LogoWhiteSvg } from '../../assets/images/logo-white.svg';

import { ProfileDropdown } from '../ProfileDropdown';
import { RoomCode } from '../RoomCode';
import { MyHeader } from './style';
import { useTheme } from '../../hooks/useTheme';

export function Header(props: HeaderProps) {
  const { roomId, closeRoom } = props;
  const { theme } = useTheme();

  return (
    <MyHeader>
      <div className="content">
        {theme.title === 'dracula' ? (
          <LogoWhiteSvg title="Letmeask" />
        ) : (
          <LogoDarkSvg title="Letmeask" />
        )}
        <div>
          {roomId && <RoomCode code={roomId} />}

          {closeRoom ? (
            <ProfileDropdown adminCloseRoom={closeRoom} />
          ) : (
            <ProfileDropdown roomId={roomId} />
          )}

        </div>
      </div>
    </MyHeader>
  );
}
