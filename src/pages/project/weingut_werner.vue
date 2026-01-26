<template>
  <div class="project">
    <h1 class="project-title">Weingut Werner</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.weingut_werner.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.weingut_werner.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p class="spacer-project-paid" >{{ t('texts.weingut_werner.1.1') }}</p>
      </div>
      <div class="third">
        <p>{{ t('texts.weingut_werner.2.1') }}</p><br>
        <p>{{ t('texts.weingut_werner.2.2') }}</p><br>
        <p>{{ t('texts.weingut_werner.2.3') }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.weingut_werner.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.weingut_werner.images.2')"><div class="spacer"></div>
  </div>
</template>

<script>

import { imageUrl } from '@/utils/cloudinary'
import { useStore } from 'vuex'

export default {
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.project.weingut_werner',
      description: 'SEO.project.weingut_werner',
    })

    const store = useStore()
    const isMobile = computed(() => store.state.isMobile)
    const baseIds = [
      {desktop: 'Studio Rotstich/WernerWeingut_Flasche_mjvgsl', mobile: 'Studio Rotstich/mobile/WernerWeingut_Cover_Mobile_aems94'},
      {desktop: 'Studio Rotstich/WernerWeingut_Reben_rg8lyq', mobile: 'Studio Rotstich/mobile/WernerWeingut_Reben_u6fg09'}
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