import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://flex360-front-ae8fh.s3-website-us-east-1.amazonaws.com/'
})
