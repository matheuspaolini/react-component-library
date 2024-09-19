import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';
import react from '@vitejs/plugin-react';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react({ jsxRuntime: 'automatic' })],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/vitest.setup.ts',
    },
  }),
);
