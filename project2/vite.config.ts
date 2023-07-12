import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    }
  },
  cacheDir: './.vite',
  server: {
    strictPort: true,
    port: 3001,
    host: '0.0.0.0',
    watch: {
      // Use polling instead of file system events - events not working on Docker when using 'npm workspaces'
      usePolling: true,
      interval: 300
    }
  }
})
