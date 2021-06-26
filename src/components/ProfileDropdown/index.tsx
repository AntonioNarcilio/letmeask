/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { ReactComponent as ProfileSvg } from '../../assets/images/profile.svg';
import { ReactComponent as MoonSvg } from '../../assets/images/moon.svg';
import { ReactComponent as SunSvg } from '../../assets/images/sun.svg';

import { Dropdown } from './style';
import { ProfileDropdownType } from '../../@types/profile-dropdown.d';
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext';

export function ProfileDropdown(props: ProfileDropdownType) {
  const history = useHistory();
  const { user, signOut, signInWithGoogle } = useAuth();
  const { theme, switchTheme } = useContext(ThemeSwitchContext);

  const { adminCloseRoom, roomId } = props;

  async function handleSignInGoogle(pageId: string|undefined) {
    // user is not authenticate?
    if (!user) {
      await signInWithGoogle();
    }

    history.push(`${pageId}`);
  }

  function handleSignOutAccount() {
    // user is not authenticate?
    if (user) {
      signOut();
    }
    history.replace('/');
  }

  function showDropdownContent() {
    // @ts-ignore
    document.getElementById('my-dropdown').classList.toggle('show');
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = (event) => {
    const targetMatches = event.target as HTMLDivElement;

    if (!targetMatches.matches('.drop-button')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');

      for (let i = 0; i < dropdowns.length; i += 1) {
        const openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  return (
    <>
      <Dropdown>
        <button
          type="button"
          className="drop-button"
          onClick={showDropdownContent}
          title="Profile"
          aria-label="Profile"
        >
          <div>
            { user ? (
              <img src={user.avatar} alt={user.name} />
            ) : (
              <ProfileSvg />
            )}

          </div>
        </button>

        <div id="my-dropdown" className="dropdown-content">
          {theme.title === 'dracula' ? (
            <button
              type="button"
              className="theme-light"
              // @ts-ignore
              onClick={() => switchTheme('nlw')}
            >
              <span>Modo dia</span>
              <SunSvg />
            </button>
          ) : (
            <button
              type="button"
              className="theme-dark"
              // @ts-ignore
              onClick={() => switchTheme('dracula')}
            >
              <span>Modo noite</span>
              <MoonSvg />
            </button>
          )}

          <a href="/info">Info</a>

          {adminCloseRoom && (
          <button
            type="button"
            onClick={adminCloseRoom}
            className="outlined"
          >
            Close room
          </button>
          )}

          { user ? (
            <button
              type="button"
              className="logoff"
              onClick={handleSignOutAccount}
            >
              Sair

            </button>
          ) : (
            <button
              type="button"
              className="login"
              onClick={() => handleSignInGoogle(roomId)}
            >
              Entrar
            </button>
          )}
        </div>

      </Dropdown>
    </>
  );
}
