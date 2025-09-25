<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-tenant': 'acme',
    'data-theme': undefined
  },
  style: [
    {
      id: 'tenant-tokens',
      children: ''
    }
  ]
})
</script>
