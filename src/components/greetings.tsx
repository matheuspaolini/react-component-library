export type GreetingsProps = {
  firstName: string;
};

export function Greetings(props: GreetingsProps) {
  const { firstName } = props;
  return <div data-testid="greetings-testid">Hello, {firstName}</div>;
}
