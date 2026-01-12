import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(), // <- just use default, no custom babel plugins
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional, for absolute imports
    },
  },
})

