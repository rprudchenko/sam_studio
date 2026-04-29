<script setup lang="ts">
import { MapPin, Phone } from 'lucide-vue-next';
import BookingButton from './BookingButton.vue';
import { navItems, studio } from '../data/site';
</script>

<template>
  <section class="hero" id="top">
    <nav class="hero__nav" aria-label="Основная навигация">
      <a class="hero__brand" href="#top">{{ studio.name }}</a>
      <div class="hero__links">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </div>
      <a class="hero__phone" :href="studio.phoneHref">
        <Phone :size="18" aria-hidden="true" />
        <span>{{ studio.phone }}</span>
      </a>
    </nav>

    <div class="hero__content">
      <p class="hero__type">{{ studio.type }}</p>
      <h1>{{ studio.name }}</h1>
      <p class="hero__tagline">{{ studio.tagline }}</p>

      <div class="hero__actions">
        <BookingButton />
        <a class="hero__address" href="#contacts">
          <MapPin :size="22" aria-hidden="true" />
          <span>{{ studio.address }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

