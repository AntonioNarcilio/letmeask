import { useContext } from 'react';
import { ThemeSwitchContext } from '../contexts/ThemeSwitchContext';

export function useTheme() {
  const value = useContext(ThemeSwitchContext);
  return value;
}
