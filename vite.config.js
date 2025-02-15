import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  preview: {
    allowedHosts: [
      'vs8ccsww8oo48ggo4wooog40.168.119.242.95.sslip.io'
    ]
  }
})
