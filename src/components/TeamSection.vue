<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { specialists } from '../data/site';
</script>

<template>
  <section class="section section--team" id="team">
    <div class="container">
      <SectionHeading title="Специалисты" />
      <div class="team-grid">
        <article v-for="person in specialists" :key="person.name" class="team-card">
          <img :src="person.photo" :alt="person.name" loading="lazy" />
          <div>
            <h3>{{ person.name }}</h3>
            <p class="team-card__role">{{ person.role }}</p>
            <p class="team-card__description">{{ person.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

