import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "src/styles/index.scss" as *;',
        allowedSyntax: ['scss'],
        includePaths: [path.resolve(__dirname, 'src')],
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '#',
        replacement: path.resolve(__dirname, 'loggers'),
      },
    ],
  },
})
