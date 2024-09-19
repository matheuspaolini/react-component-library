import './index.css';

import type { PropsWithChildren, ReactNode } from 'react';
import { ThemeContext } from './theme-context';

export function ThemeProvider(props: PropsWithChildren): ReactNode {
  const { children } = props;

  return (
    <ThemeContext.Provider value={{ theme: 'Light' }}>
      {/* <style
        rel="./index.css"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Injecting Styles
        dangerouslySetInnerHTML={{
          __html: '',
        }}
      /> */}

      {children}
    </ThemeContext.Provider>
  );
}
