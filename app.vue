<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
let tenantId: string = 'acme'
let theme: string | undefined = 'light'
let css = ''

if (process.server) {
  const event = useRequestEvent()
  const [{ DEFAULT_TENANT }, { loadTokens, tokensToCssVars }] = await Promise.all([
    import('~/server/middleware/tenant'),
    import('~/server/utils/theme')
  ])

  tenantId = (event?.context.tenantId as string | undefined) ?? DEFAULT_TENANT
  const tokens = await loadTokens(tenantId)
  theme = (tokens.theme as string | undefined) ?? 'light'
  css = tokensToCssVars(tokens)
} else if (process.client) {
  const docEl = document.documentElement
  tenantId = docEl.getAttribute('data-tenant') ?? tenantId
  theme = docEl.getAttribute('data-theme') ?? theme
  const existingStyle = document.getElementById('tenant-tokens')
  css = existingStyle?.textContent ?? css
}

useHead({
  htmlAttrs: {
    'data-tenant': tenantId,
    'data-theme': theme
  },
  style: [
    {
      id: 'tenant-tokens',
      children: css
    }
  ]
})
</script>
