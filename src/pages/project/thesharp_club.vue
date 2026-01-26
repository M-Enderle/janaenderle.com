<template>
  <div class="project">
    <h1 class="project-title">TheSharp.<wbr>Club</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.thesharp_club.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.thesharp_club.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p class="spacer-project-paid">{{ t('texts.thesharp_club.1.1') }}</p>
      </div>
      <div class="third">
        <p>{{ t('texts.thesharp_club.2.1') }}</p><br>
        <p>{{ t('texts.thesharp_club.2.2') }}</p><br>
        <p>{{ t('texts.thesharp_club.2.3') }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.thesharp_club.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.thesharp_club.images.2')"><div class="spacer"></div>
    <img :src="images[2]" class="image" :alt="t('projects.thesharp_club.images.3')"><div class="spacer"></div>
  </div>
</template>

<script>

import { imageUrl } from '@/utils/cloudinary'
import { useStore } from 'vuex'

export default {
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.project.thesharp_club',
      description: 'SEO.project.thesharp_club',
    })

    const store = useStore()
    const isMobile = computed(() => store.state.isMobile)
    const baseIds = [
      {desktop: 'Studio Rotstich/SharpClub_Karton_Innen_u9bfi0', mobile: 'Studio Rotstich/mobile/SharpClub_Karton_Innen_Mobile_gnogof'},
      {desktop: 'Studio Rotstich/SharpClub_Kleben_pl3x2d', mobile: 'Studio Rotstich/mobile/SharpClub_Kleben_Mobile_kqppkk'},
      {desktop: 'Studio Rotstich/SharpClub_Flyer_u02txe', mobile: 'Studio Rotstich/mobile/SharpClub_Flyer_Mobile_y2ynvy'}
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