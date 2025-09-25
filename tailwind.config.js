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
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        text: 'var(--color-text)',
        bg: 'var(--color-bg)'
      },
      borderRadius: {
        md: 'var(--radius-md)'
      },
      spacing: {
        2: 'var(--space-2)',
        4: 'var(--space-4)'
      },
      fontFamily: {
        sans: ['var(--font-sans)']
      }
    }
  },
  plugins: [flowbitePlugin]
}
