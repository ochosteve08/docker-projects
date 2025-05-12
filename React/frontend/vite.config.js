import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // listen on all network interfaces
    port: 5173,      // optional, defaults to 5173
    strictPort: true // fail if 5173 is not available
  }
})
