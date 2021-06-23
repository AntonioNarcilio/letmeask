import { createContext, useState, useEffect } from 'react';
import { auth, firebase } from '../services/firebase';
import { AuthContextType, AuthContextProviderType, UserType } from '../@types/auth-context.d';

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props:AuthContextProviderType) {
  const [user, setUser] = useState<UserType>();

  // user is logged in ?
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unsubscribe = auth.onAuthStateChanged((user) => {
      try {
        if (user) {
          const { displayName, photoURL, uid } = user;

          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.');
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          });
        }
      } catch (error) {
        console.log(error);
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  async function signInWithGoogle() {
    const PROVIDER = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(PROVIDER);
    try {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR: ', error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </AuthContext.Provider>
  );
}
