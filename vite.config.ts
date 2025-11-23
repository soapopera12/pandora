import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path so the site works on username.github.io/repo-name/ or just username.github.io/
  base: './',
})