import './theme-styles.css';

import type { PropsWithChildren, ReactNode } from 'react';

import { ThemeContext } from './theme-context';
import { type CreateCustomTheme, createCustomTheme } from './create-custom-theme';

type ThemeProviderProps = {
  customTheme?: CreateCustomTheme.Params;
};

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>): ReactNode {
  const { children, customTheme } = props;

  const customCssVariables = createCustomTheme(customTheme);

  return (
    <ThemeContext.Provider value={{}}>
      <link rel="stylesheet" type="text/css" href="./theme-styles.css" />
      <style>{`:root { ${customCssVariables} }`}</style>

      {children}
    </ThemeContext.Provider>
  );
}
