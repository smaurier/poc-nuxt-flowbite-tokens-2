<template>
  <main class="min-h-screen bg-bg px-[var(--space-4)] py-[var(--space-4)] text-text font-sans">
    <article class="mx-auto max-w-3xl space-y-[var(--space-4)]">
      <header>
        <h1 class="text-3xl font-bold">Welcome to the English version</h1>
        <p class="mt-[var(--space-2)]">Explore how design tokens create a cohesive multilingual experience.</p>
      </header>
      <p>
        This localized English page reuses the same CSS variables as the main experience to guarantee consistency.
      </p>
      <NuxtLink class="inline-flex" to="/fr">
        <DSButton>Passer en français</DSButton>
      </NuxtLink>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'English version · Tokens Demo',
  meta: [
    {
      name: 'description',
      content: 'English page showcasing the design token usage.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/en' },
    { rel: 'alternate', hreflang: 'fr', href: 'https://example.com/fr' },
    { rel: 'alternate', hreflang: 'en', href: 'https://example.com/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://example.com/' }
  ]
})
</script>
