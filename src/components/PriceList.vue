<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { priceSections } from '../data/site';
</script>

<template>
  <section class="section section--prices" id="prices">
    <div class="container container--narrow">
      <SectionHeading title="Прайс лист" />
      <div class="price-panel">
        <section v-for="section in priceSections" :key="section.title" class="price-section">
          <h3>{{ section.title }}</h3>
          <ul>
            <li v-for="item in section.items" :key="`${section.title}-${item.label}`">
              <span class="price-label">{{ item.label }}</span>
              <span class="price-dots" aria-hidden="true" />
              <span class="price-value">{{ item.price }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

