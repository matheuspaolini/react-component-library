import { getFormattedId, type GetFormattedId } from './shared/get-formatted-id';

import { Greetings, type GreetingsProps } from './components/greetings';
import { UserStatus, type UserStatusProps } from './components/user-status';
import { UserStatusPure, type UserStatusPureProps } from './components/user-status-pure';
import { UserProfileIcon, type UserProfileIconProps } from './components/user-profile-icon';

export const Library = {
  Utilities: {
    getFormattedId,
  },
  Components: {
    Greetings,
    UserStatus,
    UserStatusPure,
    UserProfileIcon,
  },
};

export type { GetFormattedId };

export type { GreetingsProps, UserStatusProps, UserStatusPureProps, UserProfileIconProps };
