import { Toaster, ToastBar } from 'react-hot-toast';

export function CustomToastSuccess() {
  return (
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
  );
}

export function CustomToastError() {
  return (
    <Toaster
      toastOptions={{
        error: {
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
  );
}
