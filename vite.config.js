import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-vite-react-three/',
  plugins: [react(), ghPages()],
  server: {
    host: true
  },
  assetsInclude: ['**/*.glb']
})
