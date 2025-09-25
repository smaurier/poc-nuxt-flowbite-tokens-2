<template>
  <div class="min-h-screen bg-bg text-text font-sans">
    <header class="border-b border-[color:var(--color-primary)] bg-bg px-[var(--space-4)] py-[var(--space-2)]">
      <h1 class="text-3xl font-bold">Flowbite &amp; Tokens</h1>
      <p class="text-sm">Intégration des composants Flowbite-Vue avec les variables de design tokens.</p>
    </header>

    <main class="mx-auto flex max-w-5xl flex-col gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-4)]">
      <section class="space-y-[var(--space-2)]">
        <FlowButton class="bg-primary text-[color:var(--color-primary-contrast)] rounded-md px-[var(--space-4)] py-[var(--space-2)] font-semibold" @click="isModalOpen = true">
          Ouvrir la modale
        </FlowButton>

        <FlowAlert class="bg-primary/10 text-text border border-[color:var(--color-primary)]">
          Les composants Flowbite peuvent être harmonisés avec les tokens grâce aux classes Tailwind personnalisées.
        </FlowAlert>
      </section>

      <section>
        <FlowTabs class="text-text">
          <FlowTab title="Présentation">
            <p class="p-[var(--space-4)]">
              Utilisez les onglets Flowbite pour organiser le contenu, tout en conservant la typographie <span class="font-semibold">font-sans</span>.
            </p>
          </FlowTab>
          <FlowTab title="Actions">
            <div class="flex gap-[var(--space-4)] p-[var(--space-4)]">
              <FlowButton class="bg-primary text-[color:var(--color-primary-contrast)] rounded-md px-[var(--space-4)] py-[var(--space-2)]">
                Action primaire
              </FlowButton>
              <FlowButton class="bg-bg text-text border border-[color:var(--color-primary)] rounded-md px-[var(--space-4)] py-[var(--space-2)]">
                Action secondaire
              </FlowButton>
            </div>
          </FlowTab>
        </FlowTabs>
      </section>

      <section class="rounded-md border border-[color:var(--color-primary)] bg-bg p-[var(--space-4)]">
        <header class="mb-[var(--space-2)] flex items-center justify-between">
          <h2 class="text-xl font-semibold">Token Debug Panel</h2>
          <div v-if="tokens?.dark?.enabled" class="flex items-center gap-[var(--space-2)]">
            <label for="dark-toggle" class="text-sm">Thème sombre</label>
            <input id="dark-toggle" v-model="isDark" class="h-4 w-4" type="checkbox" />
          </div>
        </header>
        <div v-if="tokenEntries.length" class="grid gap-[var(--space-2)] md:grid-cols-2">
          <div v-for="([key, value], index) in tokenEntries" :key="`${key}-${index}`" class="rounded-md border border-[color:var(--color-primary)] bg-bg p-[var(--space-2)]">
            <p class="text-sm font-semibold">{{ key }}</p>
            <p class="text-xs break-words">{{ formatValue(value) }}</p>
          </div>
        </div>
        <p v-else class="text-sm">Chargement des tokens...</p>
      </section>
    </main>

    <FlowModal v-model:show="isModalOpen" class="text-text">
      <template #header>
        <h3 class="text-lg font-semibold">Modale pilotée par tokens</h3>
      </template>
      <p class="py-[var(--space-2)]">
        Les couleurs et espacements de cette modale sont contrôlés via les variables CSS définies par les design tokens.
      </p>
      <template #footer>
        <div class="flex justify-end gap-[var(--space-2)]">
          <FlowButton class="bg-bg text-text border border-[color:var(--color-primary)] rounded-md px-[var(--space-4)] py-[var(--space-2)]" @click="isModalOpen = false">
            Fermer
          </FlowButton>
        </div>
      </template>
    </FlowModal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { Alert as FlowAlert, Button as FlowButton, Modal as FlowModal, Tab as FlowTab, Tabs as FlowTabs } from 'flowbite-vue'

const isModalOpen = ref(false)
const isDark = ref(false)

const { data: tokens } = await useFetch('/api/theme')

const tokenEntries = computed(() => {
  if (!tokens.value || typeof tokens.value !== 'object') {
    return [] as Array<[string, unknown]>
  }
  return Object.entries(tokens.value as Record<string, unknown>)
})

const formatValue = (value: unknown) => {
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value)
  }
  return String(value)
}

onMounted(() => {
  isDark.value = document.documentElement.dataset.theme === 'dark'
})

watch(isDark, (value) => {
  if (value) {
    document.documentElement.dataset.theme = 'dark'
  } else {
    delete document.documentElement.dataset.theme
  }
})

useHead({
  title: 'Flowbite · Tokens Demo',
  meta: [
    {
      name: 'description',
      content: 'Exemples Flowbite-Vue intégrés aux design tokens et panneau de débogage.'
    }
  ]
})
</script>
