import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-09-25',
  ssr: true,
  alias: {
    '@': projectDir,
    '~': projectDir
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  build: { transpile: ['flowbite-vue'] },
  vite: { ssr: { noExternal: ['flowbite-vue'] } }
})
