import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   devSourcemap: true
  // },
  // resolve: {
  //   alias: {
  //     '@uai-ui-react': resolve(__dirname, '../packages')
  //   }
  // }
})
