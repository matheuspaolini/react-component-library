import styleToCss from 'style-object-to-css-string';
import { DEFAULT_THEME } from './default-theme';

export namespace CreateCustomTheme {
  export type Params = {
    '--primary-400': string;
    '--primary-300': string;
    '--primary-200': string;
    '--primary-100': string;
    '--primary-50': string;
  };

  export type Result = string;
}

export function createCustomTheme(params?: CreateCustomTheme.Params): CreateCustomTheme.Result {
  if (!params) return styleToCss(DEFAULT_THEME);

  return styleToCss({
    '--primary-400': params['--primary-400'],
    '--primary-300': params['--primary-300'],
    '--primary-200': params['--primary-200'],
    '--primary-100': params['--primary-100'],
    '--primary-50': params['--primary-50'],
  });
}
