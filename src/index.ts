import { getFormattedId, type GetFormattedId } from './shared/get-formatted-id';

import { Greetings, type GreetingsProps } from './components/greetings';
import { UserStatus, type UserStatusProps } from './components/user-status';

export const Library = {
  Utilities: {
    getFormattedId,
  },
  Components: {
    Greetings,
    UserStatus,
  },
};

export type { GetFormattedId };
export type { GreetingsProps, UserStatusProps };
