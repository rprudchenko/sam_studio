<script setup lang="ts">
defineProps<{
  title: string;
  eyebrow?: string;
  inverted?: boolean;
}>();
</script>

<template>
  <header class="section-heading" :class="{ 'section-heading--inverted': inverted }">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <span aria-hidden="true" />
  </header>
</template>

