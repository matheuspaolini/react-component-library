import type { ReactNode } from 'react';

export type GreetingsProps = {
  firstName: string;
};

export function Greetings(props: GreetingsProps): ReactNode {
  const { firstName } = props;
  return <div data-testid="greetings-testid">Hello, {firstName}</div>;
}
