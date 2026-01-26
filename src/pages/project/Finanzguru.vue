<template>
  <div class="project">
    <h1 class="project-title">Finanzguru</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.finanzguru.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.finanzguru.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p class="spacer-project-paid">{{ t('texts.finanzguru.1.1') }}</p>
      </div>
      <div class="third">
        <p>{{ t('texts.finanzguru.2.1') }}</p><br>
        <p>{{ t('texts.finanzguru.2.2') }}</p><br>
        <p>{{ t('texts.finanzguru.2.3') }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.finanzguru.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.finanzguru.images.2')"><div class="spacer"></div>
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { imageUrl } from '@/utils/cloudinary'

export default {
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.project.finanzguru',
      description: 'SEO.project.finanzguru',
    })

    const store = useStore();
    const isMobile = computed(() => store.state.isMobile)

    const rawIds = [
      {desktop: 'Studio Rotstich/Finanzguru_Poster_yjtf19', mobile: 'Studio Rotstich/mobile/Finanzguru_Poster_Mobile_ip3p3y'},
      {desktop: 'Studio Rotstich/Finanzguru_Pizza_k7enpq', mobile: 'Studio Rotstich/mobile/Finanzguru_Cover_Mobile_faklyb'}
    ]

    const images = computed(() => rawIds.map((id) => imageUrl(id, isMobile.value)))
    
    return {
      images, t
    }
  },
}
</script>