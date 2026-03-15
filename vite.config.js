import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // This will now try to open the browser
    hmr: {
      // Use the same host and port as the server
      host: 'localhost',
      port: 5173,
      protocol: 'ws', // or 'wss' if you're using HTTPS
    },
  },
})