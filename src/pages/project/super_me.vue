<template>
    <div class="project">
      <h1 class="project-title">SUPER ME</h1>
      <div class="buttons">
      <NuxtLink :to="localePath(t('projects.super_me.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.super_me.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
      <div class="thirds">
        <div class="third">
          <p  class="spacer-project-paid" style="margin-bottom: 0;">{{ t("texts.super_me.1.1") }}</p>
          <p  class="spacer-project-paid" style="margin-top: 0;">{{ t("texts.super_me.1.2") }}</p>
        </div>
        <div class="third">
          <p>{{ t("texts.super_me.2.1") }}</p><br>
          <p>{{ t("texts.super_me.2.2") }}</p><br>
          <p>{{ t("texts.super_me.2.3") }}</p><br>
        </div>
      </div>
      <img :src="images[0]" class="image" :alt="t('projects.super_me.images.1')"><div class="spacer"></div>
      <img :src="images[1]" class="image" :alt="t('projects.super_me.images.2')">
      <h2>{{ t("texts.super_me.3") }}</h2>
      <img :src="images[2]" class="image" :alt="t('projects.super_me.images.3')"><div class="spacer"></div>
      <img :src="images[3]" class="image" :alt="t('projects.super_me.images.4')"><div class="spacer"></div>
      <img :src="images[4]" class="image" :alt="t('projects.super_me.images.5')"><div class="spacer"></div>
      <img :src="images[5]" class="image" :alt="t('projects.super_me.images.6')"><div class="spacer"></div>
    </div>
</template>

<script>

import { imageUrl } from '@/utils/cloudinary'
import { useStore } from 'vuex'

export default {
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.project.super_me',
      description: 'SEO.project.super_me',
    })

    const store = useStore()
    const isMobile = computed(() => store.state.isMobile)
    const baseIds = [
      {desktop: 'Studio Rotstich/z3lhyyecsghqswgpbciq', mobile: 'Studio Rotstich/mobile/SuperMe_Screen_Gelb_Mobile_t3pb8i'},
      {desktop: 'Studio Rotstich/zkis9rqjh5sat9uhugks', mobile: 'Studio Rotstich/mobile/SuperMe_Store_Mobile_r8v6be'},
      {desktop: 'Studio Rotstich/k18lzpeuupkm3iybjk2e', mobile: 'Studio Rotstich/mobile/SuperMe_Smartphone_Mobile_fkaodn'},
      {desktop: 'Studio Rotstich/yekn1rijsk1h6acgniay', mobile: 'Studio Rotstich/mobile/SuperMe_Poster1_Mobile_a6xeog'},
      {desktop: 'Studio Rotstich/a9wslmnqdbpqs8oww91h', mobile: 'Studio Rotstich/mobile/SuperMe_Poster2_Mobile_gxljko'},
      {desktop: 'Studio Rotstich/kfca1oyzwzyfqdmw53wr', mobile: 'Studio Rotstich/mobile/SuperME_Sticker_Mobile_tivoly'},
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