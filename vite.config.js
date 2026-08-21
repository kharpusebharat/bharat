import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 👈 Add this

export default defineConfig({
  plugins: [react()],
  base: '/bharat/', // ← Keep this for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 Map @ to /src
    },
  },
})
