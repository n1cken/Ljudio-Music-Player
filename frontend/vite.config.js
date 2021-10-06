import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //the url prefix we use with backend
      '/homepage': 'http://localhost:4000'
    }
  }
})

