import { ReactNode } from 'react';

type ThemeSwitchContextProviderType = {
  children: ReactNode;
}
type ThemeType = { title: 'nlw' | 'dracula' };
// eslint-disable-next-line no-unused-vars
type SwitchThemeType = (theme:ThemeType) => void;

type ThemeSwitchContextType = {
  theme: ThemeType;
  switchTheme: SwitchThemeType;
}

export { ThemeSwitchContextProviderType, ThemeSwitchContextType };
