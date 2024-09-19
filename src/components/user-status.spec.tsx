import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UserStatus } from './user-status';

const FIRST_NAME = 'some-name';

describe('<UserStatus />', () => {
  it('should render UserStatus component', () => {
    render(<UserStatus firstName={FIRST_NAME} status="Online" />);

    expect(screen.getByTestId('user-status-online-testid')).toBeVisible();
    expect(screen.getByTestId('user-status-online-testid')).toBeInTheDocument();
  });

  it('should render Online status correctly', () => {
    render(<UserStatus firstName={FIRST_NAME} status="Online" />);

    expect(screen.getByText(`${FIRST_NAME} is available to receive calls.`)).toBeVisible();
    expect(screen.getByTestId('user-status-online-testid')).toBeVisible();
  });

  it('should render Busy status correctly', () => {
    render(<UserStatus firstName={FIRST_NAME} status="Busy" />);

    expect(screen.getByText(`${FIRST_NAME} is busy but will be available soon.`)).toBeVisible();
    expect(screen.getByTestId('user-status-busy-testid')).toBeVisible();
  });

  it('should render Invisible status correctly', () => {
    render(<UserStatus firstName={FIRST_NAME} status="Invisible" />);

    expect(screen.getByText(`${FIRST_NAME} is not available.`)).toBeVisible();
    expect(screen.getByTestId('user-status-invisible-testid')).toBeVisible();
  });

  it('should render Offline status correctly', () => {
    render(<UserStatus firstName={FIRST_NAME} status="Offline" />);

    expect(screen.getByText(`${FIRST_NAME} is not available.`)).toBeVisible();
    expect(screen.getByTestId('user-status-offline-testid')).toBeVisible();
  });
});
