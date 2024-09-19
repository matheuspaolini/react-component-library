import type { ReactNode } from 'react';

export type UserStatus = 'Online' | 'Invisible' | 'Busy' | 'Offline';

export type UserStatusPureProps = {
  status: UserStatus;
  firstName: string;
};

export function UserStatusPure(props: UserStatusPureProps): ReactNode {
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

  if (!status) return null;

  const message = {
    Online: `${firstName} is available to receive calls.`,
    Busy: `${firstName} is busy but will be available soon.`,
    Invisible: `${firstName} is not available.`,
    Offline: `${firstName} is not available.`,
  }[status];

  if (!message) return null;

  return message;
}
