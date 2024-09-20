import { ThemeProvider } from './theme/theme-provider';
import { Button } from './components/button';
import { Switch } from './components/switch';
import './globals.css';

function App() {
  return (
    <ThemeProvider>
      <p style={{ color: 'var(--primary-400)' }}>Primary 400</p>
      <p style={{ color: 'var(--primary-300)' }}>Primary 300</p>
      <p style={{ color: 'var(--primary-200)' }}>Primary 200</p>
      <p style={{ color: 'var(--primary-100)' }}>Primary 100</p>
      <p style={{ color: 'var(--primary-50)' }}>Primary 50</p>

      <Button />
      <Switch />
    </ThemeProvider>
  );
}

export default App;
