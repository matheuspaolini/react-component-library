import './theme-styles.css';

import type { PropsWithChildren, ReactNode } from 'react';
import { ThemeContext } from './theme-context';

export function ThemeProvider(props: PropsWithChildren): ReactNode {
  const { children } = props;

  return (
    <ThemeContext.Provider value={{ theme: 'Light' }}>
      <link rel="stylesheet" type="text/css" href="./theme-styles.css" />

      {children}
    </ThemeContext.Provider>
  );
}
