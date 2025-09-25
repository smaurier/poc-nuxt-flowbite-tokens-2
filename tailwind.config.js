const flowbitePlugin = require('flowbite/plugin')

module.exports = {
  content: [
    './app.vue',
    './error.vue',
    './app.config.ts',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './server/**/*.{js,ts}',
    './node_modules/flowbite/**/*.{js,vue,ts}',
    './node_modules/flowbite-vue/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [flowbitePlugin]
}
