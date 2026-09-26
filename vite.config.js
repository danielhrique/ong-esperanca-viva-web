import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        inicio: resolve(__dirname, 'html/inicio.html'),
        projetos: resolve(__dirname, 'html/projetos.html'),
        cadastro: resolve(__dirname, 'html/cadastro.html'),
      },
    },
  },
});
