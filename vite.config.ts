import packageJson from './package.json';

import { defineConfig } from 'vite';
import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
  ],

  build: {
    lib: {
      name: packageJson.name,
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
