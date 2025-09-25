<template>
  <button
    type="button"
    class="inline-flex items-center justify-center bg-primary text-[color:var(--color-primary-contrast)] rounded-md px-[var(--space-4)] py-[var(--space-2)] font-sans"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{ (event: 'click', payload: MouseEvent): void }>()
</script>
