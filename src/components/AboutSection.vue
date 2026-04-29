<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { studio, studioPhotos } from '../data/site';
</script>

<template>
  <section class="section section--about" id="about">
    <div class="container">
      <SectionHeading title="О студии" />
      <div class="about">
        <div class="about__copy">
          <p>
            Уютная студия в центре города, где работают профессиональные мастера
            с многолетним опытом. Мы предлагаем индивидуальный подход к каждому
            клиенту, используя качественные материалы и современные техники.
          </p>
          <p>
            Наша цель - создать образ, который подчеркнет вашу индивидуальность,
            будет удобен в жизни и аккуратно отрастет после визита.
          </p>
          <dl class="about__facts">
            <div>
              <dt>Адрес</dt>
              <dd>{{ studio.address }}</dd>
            </div>
            <div>
              <dt>График</dt>
              <dd>{{ studio.hours }}</dd>
            </div>
          </dl>
        </div>
        <div class="about__photos" aria-label="Фотографии студии">
          <img
            v-for="photo in studioPhotos"
            :key="photo.src"
            :src="photo.src"
            :alt="photo.alt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

