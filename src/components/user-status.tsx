import type { ReactNode } from 'react';
import { match } from 'ts-pattern';

export type UserStatus = 'Online' | 'Invisible' | 'Busy' | 'Offline';

export type UserStatusProps = {
  status: UserStatus;
  firstName: string;
};

export function UserStatus(props: UserStatusProps): ReactNode {
  const { firstName, status } = props;

  const statusInLowerCase = status.toLocaleLowerCase();

  return (
    <div data-testid={`user-status-${statusInLowerCase}-testid`}>
      {getStatusMessage({ firstName, status })}
    </div>
  );
}

function getStatusMessage(params: { status: UserStatus; firstName: string }) {
  const { firstName, status } = params;

  return match(status)
    .with('Online', () => `${firstName} is available to receive calls.`)
    .with('Busy', () => `${firstName} is busy but will be available soon.`)
    .with('Invisible', () => `${firstName} is not available.`)
    .with('Offline', () => `${firstName} is not available.`)
    .otherwise(() => null);
}
