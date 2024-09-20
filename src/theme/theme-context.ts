import { createContext, useContext } from 'react';

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const ThemeContext = createContext<{} | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeContext must be within ThemeProvider');
  }

  return context;
}
