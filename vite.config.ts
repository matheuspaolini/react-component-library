import packageJson from './package.json';

import { defineConfig } from 'vite';
import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import getFolderSize from 'get-folder-size';

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ rollupTypes: true }),
    {
      name: 'get-bundle-size',
      closeBundle: async () => {
        const sizeInBytes = (await getFolderSize('./dist')).size;
        const sizeInKb = (sizeInBytes / 1024).toFixed(2);
        console.log(`\nLibrary Bundle Size: ${sizeInKb} KB`);
      },
    },
  ],

  build: {
    lib: {
      name: packageJson.name,
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      treeshake: 'recommended',
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },

        assetFileNames(chunkInfo) {
          const chunkInfoName = chunkInfo.name;

          if (!chunkInfoName) {
            throw new Error('Fail to load chunk info name.');
          }

          if (chunkInfoName.endsWith('.css')) {
            return 'theme-styles.css';
          }

          return chunkInfo.name || '';
        },
      },
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss({ config: './tailwind.config.js' })],
    },
  },
});
