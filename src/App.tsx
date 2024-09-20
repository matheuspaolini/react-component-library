import { ThemeProvider } from './theme/theme-provider';
import { Button } from './components/button';
import { Switch } from './components/switch';
import './globals.css';

function App() {
  return (
    <ThemeProvider>
      <Button />
      <Switch />
    </ThemeProvider>
  );
}

export default App;
