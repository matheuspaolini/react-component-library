import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Greetings } from './greetings';

const FIRST_NAME = 'some-name';

describe('<Greetings />', () => {
  it('should render Greetings component', () => {
    render(<Greetings firstName={FIRST_NAME} />);

    expect(screen.getByTestId('greetings-testid')).toBeInTheDocument();
  });

  it('should display greetings message', () => {
    render(<Greetings firstName={FIRST_NAME} />);

    expect(screen.getByText(`Hello, ${FIRST_NAME}`)).toBeVisible();
  });
});
