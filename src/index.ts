import { getFormattedId, type GetFormattedId } from './shared/get-formatted-id';
import { Greetings, type GreetingsProps } from './components/greetings';

export const Library = {
  Utilities: {
    getFormattedId,
  },
  Components: {
    Greetings,
  },
};

export type { GetFormattedId };
export type { GreetingsProps };
