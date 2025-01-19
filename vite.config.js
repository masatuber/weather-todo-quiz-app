import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    // コード分割
    chunkSizeWarningLimit: 1600,
    // ツリーシェイキング
    minify: 'esbuild', // esbuild による minify を推奨
    // ライブラリの外部化
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
} );