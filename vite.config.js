import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPlugin from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    htmlPlugin({
      inject: {
        injectScript: `<script src="/static/alm-dns-config.js"></script>`
      }
    })
  ]
})
