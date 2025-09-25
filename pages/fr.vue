<template>
  <main class="min-h-screen bg-bg px-[var(--space-4)] py-[var(--space-4)] text-text font-sans">
    <article class="mx-auto max-w-3xl space-y-[var(--space-4)]">
      <header>
        <h1 class="text-3xl font-bold">Bienvenue sur la version française</h1>
        <p class="mt-[var(--space-2)]">Découvrez comment les design tokens harmonisent l'expérience utilisateur.</p>
      </header>
      <p>
        Cette page démontre une version localisée en français utilisant les mêmes variables CSS que la version principale.
      </p>
      <NuxtLink class="inline-flex" to="/en">
        <DSButton>Switch to English</DSButton>
      </NuxtLink>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Version française · Tokens Demo',
  meta: [
    {
      name: 'description',
      content: 'Page française démontrant les design tokens.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/fr' },
    { rel: 'alternate', hreflang: 'fr', href: 'https://example.com/fr' },
    { rel: 'alternate', hreflang: 'en', href: 'https://example.com/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://example.com/' }
  ]
})
</script>
