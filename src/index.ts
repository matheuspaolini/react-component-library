import { getFormattedId, type GetFormattedId } from './shared/get-formatted-id';

import { Greetings, type GreetingsProps } from './components/greetings';
import { UserStatus, type UserStatusProps } from './components/user-status';
import { UserStatusPure, type UserStatusPureProps } from './components/user-status-pure';

export const Library = {
  Utilities: {
    getFormattedId,
  },
  Components: {
    Greetings,
    UserStatus,
    UserStatusPure,
  },
};

export type { GetFormattedId };

export type { GreetingsProps, UserStatusProps, UserStatusPureProps };
