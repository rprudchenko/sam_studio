<script setup lang="ts">
import { Baby, Scissors, Sparkles, Wind } from 'lucide-vue-next';
import SectionHeading from './SectionHeading.vue';
import { services } from '../data/site';

const iconMap = {
  baby: Baby,
  scissors: Scissors,
  sparkles: Sparkles,
  wind: Wind,
};
</script>

<template>
  <section class="section section--muted" id="services">
    <div class="container">
      <SectionHeading title="Услуги" />
      <div class="services-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <div class="icon-bubble">
            <component :is="iconMap[service.icon as keyof typeof iconMap]" :size="38" stroke-width="2" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

