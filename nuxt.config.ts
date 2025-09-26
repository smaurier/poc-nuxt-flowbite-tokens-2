export default defineNuxtConfig({
  srcDir: '.',
  ssr: true,
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ['flowbite-vue']
  },
  vite: {
    ssr: {
      noExternal: ['flowbite-vue']
    }
  }
})
