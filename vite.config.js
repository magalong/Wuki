import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bmi: resolve(__dirname, 'html/Category/Calculator/BMI.html'),
      }
    }
  }
})
