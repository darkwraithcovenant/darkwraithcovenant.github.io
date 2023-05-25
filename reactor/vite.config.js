import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // making the base one level higher
  base: './',
  build: {
    //making the output Dir two levels higher.
      outDir: '../dist'
  }
})
