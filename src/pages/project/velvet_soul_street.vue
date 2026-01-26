<template>
  <div class="project">
    <h1 class="project-title">Velvet Soul Street</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.velvet_soul_street.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.velvet_soul_street.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p class="spacer-project-paid" >{{ t('texts.velvet_soul_street.1.1') }}</p>
      </div>
      <div class="third">
        <p>{{ t('texts.velvet_soul_street.2.1') }}</p><br>
        <p>{{ t('texts.velvet_soul_street.2.2') }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.velvet_soul_street.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.velvet_soul_street.images.2')"><div class="spacer"></div>
    <img :src="images[2]" class="image" :alt="t('projects.velvet_soul_street.images.3')"><div class="spacer"></div>
  </div>
</template>

<script>

import { imageUrl } from '@/utils/cloudinary'
import { useStore } from 'vuex'

export default {
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.project.velvet_soul_street',
      description: 'SEO.project.velvet_soul_street',
    })

    const store = useStore()
    const isMobile = computed(() => store.state.isMobile)
    const baseIds = [
      {desktop: 'Studio Rotstich/VelvetSoul_Shirt_x6d9qn', mobile: 'Studio Rotstich/mobile/VelvetSoul_Shirt_Mobile_jc8x6g'},
      {desktop: 'Studio Rotstich/VelvetSoul_Sticker_rqvr2q', mobile: 'Studio Rotstich/mobile/VelvetSoul_Sticker_Mobile_uodw6s'},
      {desktop: 'Studio Rotstich/VelvetSoul_Schild_aeqqaj', mobile: 'Studio Rotstich/mobile/VelvetSoul_Schild_Mobile_gsoeus'}
    ]

    const images = computed(() => baseIds.map((id) => imageUrl(id, isMobile.value)))

    return {
      images, t
    }
  },
}
</script>

<style scoped>
@media (max-width: 767px) {
  .image {
    max-width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
  }
}
</style>