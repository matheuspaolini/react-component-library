import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import { expect, it } from 'vitest';
import { UserProfileIcon } from './user-profile-icon';

describe('<UserProfileIcon />', () => {
  it('should render UserProfileIcon component', () => {
    render(<UserProfileIcon iconType="Bird" />);

    expect(screen.getByTestId('user-profile-icon-testid')).toBeInTheDocument();
    expect(screen.getByTestId('user-profile-icon-testid')).toBeVisible();
  });

  it('should render Cat profile icon', () => {
    render(<UserProfileIcon iconType="Cat" />);

    expect(screen.getByTestId('cat-icon-testid')).toBeInTheDocument();
    expect(screen.getByTestId('cat-icon-testid')).toBeVisible();
  });

  it('should render Bird profile icon', () => {
    render(<UserProfileIcon iconType="Bird" />);

    expect(screen.getByTestId('bird-icon-testid')).toBeInTheDocument();
    expect(screen.getByTestId('bird-icon-testid')).toBeVisible();
  });

  it('should render Dog profile icon', () => {
    render(<UserProfileIcon iconType="Dog" />);

    expect(screen.getByTestId('dog-icon-testid')).toBeInTheDocument();
    expect(screen.getByTestId('dog-icon-testid')).toBeVisible();
  });

  it('should render Fish profile icon', () => {
    render(<UserProfileIcon iconType="Fish" />);

    expect(screen.getByTestId('fish-icon-testid')).toBeInTheDocument();
    expect(screen.getByTestId('fish-icon-testid')).toBeVisible();
  });
});
