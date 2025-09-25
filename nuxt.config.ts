export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/tailwind.css'],
  build: { transpile: ['flowbite-vue'] },
  vite: { ssr: { noExternal: ['flowbite-vue'] } }
})
