<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
import CtaSection from './components/CtaSection.vue';
import HeroSection from './components/HeroSection.vue';
import PriceList from './components/PriceList.vue';
import ServicesGrid from './components/ServicesGrid.vue';
import SiteFooter from './components/SiteFooter.vue';
import TeamSection from './components/TeamSection.vue';
</script>

<template>
  <HeroSection />
  <main>
    <AboutSection />
    <ServicesGrid />
    <PriceList />
    <TeamSection />
    <CtaSection />
  </main>
  <SiteFooter />
</template>
