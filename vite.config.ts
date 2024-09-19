import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: './src/index.ts',
      name: 'react-component-library',
      fileName: 'react-component-library',
    },

    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          React: 'React',
        },
      },
    },
  },
});
