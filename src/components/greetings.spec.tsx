import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Greetings } from './greetings';

describe('<Greetings />', () => {
  it('should render Greetings component', () => {
    render(<Greetings firstName="some-name" />);
    expect(screen.getByTestId('greetings-testid')).toBeInTheDocument();
  });

  it('should display greetings message', () => {
    const firstName = 'some-name';
    render(<Greetings firstName={firstName} />);
    expect(screen.getByText(`Hello, ${firstName}`)).toBeVisible();
  });
});
