<template>
  <div class="min-h-screen bg-bg text-text font-sans">
    <header class="border-b border-[color:var(--color-primary)] bg-bg">
      <nav class="mx-auto flex max-w-5xl items-center justify-between px-[var(--space-4)] py-[var(--space-2)]">
        <span class="text-lg font-semibold">Token Demo</span>
        <ul class="flex gap-[var(--space-4)]">
          <li><NuxtLink class="hover:underline" to="/fr">FR</NuxtLink></li>
          <li><NuxtLink class="hover:underline" to="/en">EN</NuxtLink></li>
          <li><NuxtLink class="hover:underline" to="/flowbite">Flowbite</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="mx-auto flex max-w-5xl flex-col gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-4)]" id="main-content">
      <section class="space-y-[var(--space-2)]">
        <h1 class="text-3xl font-bold">Design Token Playground</h1>
        <p>
          Cette page utilise <span class="font-semibold">text-text</span> et <span class="font-semibold">bg-bg</span> pour démontrer l'application des
          jetons de design dans une interface Nuxt.
        </p>
        <img
          alt="Gradient placeholder"
          loading="lazy"
          class="w-full max-w-sm rounded-md border border-[color:var(--color-primary)]"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAwJyBoZWlnaHQ9JTk1JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3RvcC1jb2xvcj0nI2ZmZicvPjxzdG9wIG9mZnNldD0nMTAwJScgc3RvcC1jb2xvcj0nI2QwZCcvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3Qgd2lkdGg9JzMwMCcgaGVpZ2h0PSc5NScgZmlsbD0ndXJsKCNnKScvPjwvc3ZnPg=="
        />
      </section>

      <section class="grid gap-[var(--space-4)] md:grid-cols-2">
        <DSCard>
          <h2 class="text-xl font-semibold">Carte stylisée</h2>
          <p>
            Le composant DSCard applique automatiquement les jetons <code>bg-bg</code>, <code>text-text</code> et
            <code>color-primary</code>.
          </p>
          <DSButton class="mt-[var(--space-4)]" @click="onPrimaryAction">Action principale</DSButton>
        </DSCard>
        <DSCard>
          <h2 class="text-xl font-semibold">Composants Nuxt</h2>
          <p>
            Combinez les composants personnalisés avec NuxtLink pour créer des expériences localisées.
          </p>
          <NuxtLink class="mt-[var(--space-4)] inline-flex" to="/flowbite">
            <DSButton>Voir Flowbite</DSButton>
          </NuxtLink>
        </DSCard>
      </section>
    </main>

    <footer class="mt-auto border-t border-[color:var(--color-primary)] bg-bg">
      <div class="mx-auto max-w-5xl px-[var(--space-4)] py-[var(--space-2)]">
        &copy; {{ new Date().getFullYear() }} Tokens Demo
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const onPrimaryAction = () => {
  // Placeholder action for demonstration purposes.
}

useHead({
  title: 'Accueil · Tokens Demo',
  meta: [
    {
      name: 'description',
      content: 'Page de démonstration des design tokens avec composants personnalisés.'
    }
  ]
})
</script>
