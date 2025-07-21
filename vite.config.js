import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Exposes your dev server to your network (mobile devices)
    port: 5173,         // Optional: force it to use 5173 consistently
  },
})