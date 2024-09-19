import { createContext, useContext } from 'react';

type ThemeContextValue = {
  theme?: 'Light' | 'Dark';
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeContext must be within ThemeProvider');
  }

  return context;
}
