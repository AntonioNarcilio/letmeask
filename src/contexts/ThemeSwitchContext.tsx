/* eslint-disable no-unused-vars */
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { createContext } from 'react';
import { toast } from 'react-hot-toast';
import { usePersistedState } from '../utils/usePersistedState';
import dracula from '../styles/themes/dracula';
import nlw from '../styles/themes/nlw';
import {
  ThemeSwitchContextType, ThemeSwitchContextProviderType,
} from '../@types/theme-switch-context.d';

const ThemeSwitchContext = createContext({} as ThemeSwitchContextType);

const ThemeSwitchContextProvider = ({ children }: ThemeSwitchContextProviderType) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dracula);

  const switchTheme = () => {
    setTheme(theme.title === 'dracula' ? nlw : dracula);

    if (theme.title === 'dracula') {
      toast('Tema claro habilitado!',
        {
          icon: '🌕',
          style: {
            // borderRadius: 'px',
            background: theme.colors.primaryInverted,
            color: theme.colors.primary,
          },
        });
    } else {
      toast('Tema escuro habilitado',
        {
          icon: '🌑',
          style: {
            // borderRadius: 'px',
            background: theme.colors.primaryInverted,
            color: theme.colors.primary,
          },
        });
    }
  };

  return (
    // @ts-ignore
    <ThemeSwitchContext.Provider value={{ switchTheme, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};

export { ThemeSwitchContextProvider, ThemeSwitchContext };
