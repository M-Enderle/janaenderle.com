<template>
  <div class="project">
    <h1 class="project-title">odds&#8203;&&#8203;ends</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.odds_and_ends.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.odds_and_ends.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p  class="spacer-project-paid" style="margin-bottom: 0;">{{ t("texts.odds_and_ends.1.1") }}</p>
        <p>{{ t("texts.odds_and_ends.1.2") }}</p>
        <p class="spacer-project-paid"  style="margin-top: 0;">{{ t("texts.with") }} 
          <a href="https://yasminweddings.com/" target="_blank">Yasmin Abdullahi</a>, 
          <a href="https://hannahlaunerdesign.de/" target="_blank">Hannah Launer</a>
        </p>
      </div>
      <div class="third">
        <p>{{ t("texts.odds_and_ends.2.1") }}</p><br>
        <p>{{ t("texts.odds_and_ends.2.2") }}</p><br>
        <p>{{ t("texts.odds_and_ends.2.3") }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.odds_and_ends.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.odds_and_ends.images.2')">
    <h2>{{ t("texts.odds_and_ends.3") }}</h2>
    <video preload="auto" autoplay="autoplay" muted="muted" alt="odds&amp;ends: Motivation video" loop="loop" controls="controls" playsinline="" class="image">
      <source :src="videoSrc" type="video/mp4">
    </video>
    <img :src="images[2]" class="image" :alt="t('projects.odds_and_ends.images.3')"><div class="spacer"></div>
    <img :src="images[3]" class="image" :alt="t('projects.odds_and_ends.images.4')"><div class="spacer"></div>
    <img :src="images[4]" class="image" :alt="t('projects.odds_and_ends.images.5')"><div class="spacer"></div>
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { imageUrl } from '@/utils/cloudinary'

export default {
setup() {

  const { locale, locales, t } = useI18n()

  definePageMeta({
    title: 'pages.titles.project.odds_and_ends',
    description: 'SEO.project.odds_and_ends',
  })

  const store = useStore();
  const isMobile = computed(() => store.state.isMobile)

  const rawIds = [
    {desktop: "Studio Rotstich/mxldk0hh4iu3fdzjuvle", mobile: 'Studio Rotstich/mobile/OddsEnds_Screens_Mobile_mi2h9m'},
    {desktop: "Studio Rotstich/ple4sojn7f4sbovacdpn", mobile: 'Studio Rotstich/mobile/OddsEnds_Screens2_Mobile_xn2lm3'},
    {desktop: "Studio Rotstich/lgob4bdv7alwpzuuvl2a", mobile: 'Studio Rotstich/mobile/OddsEnds_Poster_Mobile_nfaazl'},
    {desktop: "Studio Rotstich/wizfhcimwbgbg8wllojx", mobile: 'Studio Rotstich/mobile/Oddsends_Karte_Mobile_fxrlqw'},
    {desktop: "Studio Rotstich/glezrk9l7zqbt3lgcndt", mobile: 'Studio Rotstich/mobile/OddsEnds_Sticker_Mobile_yuagev'},
  ]

  const images = computed(() => rawIds.map((id) => imageUrl(id, isMobile.value)))
  
  const videoSrc = '/videos/odds_and_ends.mp4'
  
  return {
    images, t, videoSrc
  }
},
}
</script>