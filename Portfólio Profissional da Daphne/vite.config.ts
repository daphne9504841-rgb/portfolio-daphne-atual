
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig(() => {
  return {
    base: process.env.FIGMA_PUBLIC_URL
      ? `${process.env.FIGMA_PUBLIC_URL}/`
      : '/',

    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },

    build: {
      sourcemap: false,
      minify: true,

      rollupOptions: {
        input: {
          main: path.resolve(process.cwd(), 'index.html'),
          sobre: path.resolve(process.cwd(), 'quemsoueu.html'),
          portfolio: path.resolve(process.cwd(), 'portfolio.html'),
          login: path.resolve(process.cwd(), 'login.html'),
          dashboard: path.resolve(process.cwd(), 'dashboard.html'),
        },
      },
    },

    server: {
      host: '0.0.0.0',
      port: 8443,
      strictPort: true,
    },

    preview: {
      host: '0.0.0.0',
      port: 8443,
    },
  }
})
