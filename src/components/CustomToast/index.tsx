/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Toaster, ToastBar } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';

export function CustomHotToast() {
  const { colors } = useContext(ThemeContext);

  return (
  // <Toaster>
  //   {(t) => (
  //     <ToastBar
  //       toast={t}
  //       style={{
  //         ...t.style,
  //         animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
  //       }}
  //     />
  //   )}
  // </Toaster>

    <Toaster
      containerStyle={{
        position: 'absolute',
      }}
      toastOptions={{
        className: '',
        style: {
          padding: '16px',
          background: colors.primary,
          color: colors.text,
        },
      }}
      gutter={10}
    />

  );
}
