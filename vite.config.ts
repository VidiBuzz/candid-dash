import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path for production
  build: {
    sourcemap: true, // Enable source maps for debugging production
  },
})
