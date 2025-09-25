<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-bg px-[var(--space-4)] py-[var(--space-4)] text-text font-sans">
    <div class="max-w-lg space-y-[var(--space-4)] text-center">
      <h1 class="text-5xl font-bold">404</h1>
      <p class="text-lg">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <NuxtLink class="inline-flex justify-center" to="/">
        <DSButton>Retour à l'accueil</DSButton>
      </NuxtLink>
      <p>
        Besoin d'assistance ? Contactez-nous et nous vous aiderons à retrouver votre chemin.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>()

useHead({
  title: props.error?.statusCode === 404 ? 'Page non trouvée · Tokens Demo' : 'Erreur · Tokens Demo'
})
</script>
