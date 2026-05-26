import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- ¡Este es el que activa la magia de Tailwind v4!
  ],
  server: {
    port: 3000, // Tu puerto personalizado que ya está configurado
  }
})