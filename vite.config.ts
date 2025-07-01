import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MURARI-TECH-WORLD-75/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
