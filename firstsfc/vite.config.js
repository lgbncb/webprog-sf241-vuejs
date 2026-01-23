import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    // Only run DevTools if we are NOT in production mode
    mode !== 'production' && vueDevTools(),
  ].filter(Boolean), // This removes the 'false' value from the array if in production
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    chunkSizeWarningLimit: 1600, // Useful if your Supabase dependencies are large
  }
}))