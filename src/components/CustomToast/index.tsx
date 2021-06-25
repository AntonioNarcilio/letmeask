/* eslint-disable no-unused-vars */
import { Toaster, ToastBar } from 'react-hot-toast';

export function CustomHotToast() {
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
      gutter={10}
    />

  );
}
