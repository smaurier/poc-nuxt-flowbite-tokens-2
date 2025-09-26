<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const DEFAULT_TENANT = 'acme'
const event = process.server ? useRequestEvent() : null

let tenantId: string = process.server
  ? ((event?.context.tenantId as string | undefined) ?? DEFAULT_TENANT)
  : DEFAULT_TENANT
let cssVars = ''
let isDarkMode = false

if (process.server) {
  const { loadTokens, tokensToCssVars } = await import('~/server/utils/theme')
  const tokens = await loadTokens(tenantId)

  cssVars = tokensToCssVars(tokens)
  isDarkMode = Boolean(tokens['dark.enabled'])
} else if (process.client) {
  const docEl = document.documentElement

  tenantId = docEl.getAttribute('data-tenant') ?? tenantId
  const currentTheme = docEl.getAttribute('data-theme') ?? undefined
  const existingStyle = document.getElementById('tenant-tokens')

  cssVars = existingStyle?.textContent ?? cssVars
  isDarkMode = currentTheme === 'dark'
}

useHead({
  htmlAttrs: {
    'data-tenant': tenantId,
    'data-theme': isDarkMode ? 'dark' : undefined
  },
  style: [
    {
      id: 'tenant-tokens',
      children: cssVars
    }
  ]
})
</script>
