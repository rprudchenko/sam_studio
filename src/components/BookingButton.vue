<script setup lang="ts">
import { Send } from 'lucide-vue-next';
import { bookingUrl } from '../data/site';

defineProps<{
  label?: string;
  variant?: 'light' | 'dark';
}>();
</script>

<template>
  <a
    class="booking-button"
    :class="variant === 'dark' ? 'booking-button--dark' : 'booking-button--light'"
    :href="bookingUrl"
    target="_blank"
    rel="noreferrer"
  >
    <Send :size="22" stroke-width="2.2" aria-hidden="true" />
    <span>{{ label ?? 'Заказать стрижку' }}</span>
  </a>
</template>

