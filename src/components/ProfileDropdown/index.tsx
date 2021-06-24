/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';

import { ReactComponent as ProfileImg } from '../../assets/images/profile.svg';
import { Dropdown } from './style';

export function ProfileDropDown() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  function signOutAccount() {
    // user is not authenticate?
    if (user) {
      signOut();
    }
    history.replace('/');
  }

  const notifySuccess = () => toast.success('Theme has been changed');

  function changeTheme() {
    notifySuccess();
  }

  function showDropdownContent() {
    // @ts-ignore
    document.getElementById('myDropdown').classList.toggle('show');
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
        >
          <div>
            <ProfileImg />
          </div>
        </button>

        <div id="myDropdown" className="dropdown-content">
          <button type="button" onClick={changeTheme}>Theme</button>

          <a href="/info">Info</a>

          { user && (
          <button type="button" onClick={signOutAccount}>Logoff</button>
          )}
        </div>

      </Dropdown>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'white',
              color: 'black',
            },
          },
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
            }}
          />
        )}
      </Toaster>
    </>
  );
}
