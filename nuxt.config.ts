export default defineNuxtConfig({
  srcDir: '.',
  ssr: true,
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['flowbite-vue']
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  vite: {
    ssr: {
      noExternal: ['flowbite-vue']
    }
  }
})
