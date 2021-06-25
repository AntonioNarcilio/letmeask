/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { CustomHotToast } from '../CustomToast';
import { useAuth } from '../../hooks/useAuth';

import { ReactComponent as ProfileImg } from '../../assets/images/profile.svg';
import { Dropdown } from './style';
import { ProfileDropdownType } from '../../@types/profile-dropdown.d';

export function ProfileDropdown(props: ProfileDropdownType) {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const { adminCloseRoom } = props;

  function signOutAccount() {
    // user is not authenticate?
    if (user) {
      signOut();
    }
    history.replace('/');
  }

  const notifySuccess = () => toast.success('O tema foi alterado!');

  function changeTheme() {
    notifySuccess();
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
            <ProfileImg />
          </div>
        </button>

        <div id="my-dropdown" className="dropdown-content">
          <button type="button" onClick={changeTheme}>Theme</button>

          <a href="/info">Info</a>

          { adminCloseRoom && <button type="button" onClick={adminCloseRoom} className="outlined">Close room</button>}

          { user && (
          <button type="button" onClick={signOutAccount}>Logoff account</button>
          )}
        </div>

      </Dropdown>

      <CustomHotToast />

    </>
  );
}
