<script setup lang="ts">
import { Instagram, MapPin, Phone } from 'lucide-vue-next';
import { navItems, studio } from '../data/site';
</script>

<template>
  <footer class="footer" id="contacts">
    <div class="container footer__grid">
      <div class="footer__brand">
        <a href="#top">{{ studio.name }}</a>
        <p>{{ studio.type }}</p>
      </div>

      <address class="footer__contacts">
        <a :href="studio.phoneHref">
          <Phone :size="18" aria-hidden="true" />
          <span>{{ studio.phone }}</span>
        </a>
        <span>
          <MapPin :size="18" aria-hidden="true" />
          <span>{{ studio.address }}</span>
        </span>
        <span>{{ studio.hours }}</span>
      </address>

      <nav class="footer__nav" aria-label="Навигация в футере">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </div>

    <div class="container footer__bottom" id="privacy">
      <p>© 2026 {{ studio.name }}. Все права защищены.</p>
      <a href="#privacy">Политика конфиденциальности</a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <Instagram :size="18" aria-hidden="true" />
      </a>
    </div>
  </footer>
</template>
