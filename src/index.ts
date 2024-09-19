import { getFormattedId, type GetFormattedId } from './shared/get-formatted-id';

import { Switch } from './components/switch';
import { Greetings, type GreetingsProps } from './components/greetings';
import { UserStatus, type UserStatusProps } from './components/user-status';
import { UserStatusPure, type UserStatusPureProps } from './components/user-status-pure';
import { UserProfileIcon, type UserProfileIconProps } from './components/user-profile-icon';
import { Button } from './components/button';
import { ThemeProvider } from './theme/theme-provider';
import { useThemeContext } from './theme/theme-context';

export const Library = {
  Utilities: {
    getFormattedId,
  },
  Components: {
    Greetings,
    UserStatus,
    UserStatusPure,
    UserProfileIcon,
    Switch,
    ThemeProvider,
    Button,
  },
  Hooks: {
    useThemeContext,
  },
};

export type { GetFormattedId };

export type { GreetingsProps, UserStatusProps, UserStatusPureProps, UserProfileIconProps };
