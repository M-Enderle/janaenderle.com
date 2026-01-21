<template>
  <div class="project">
    <h1 class="project-title">odds&#8203;&&#8203;ends</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.odds_and_ends.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.odds_and_ends.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t("texts.odds_and_ends.1.1") }}</p>
        <p>{{ t("texts.odds_and_ends.1.2") }}</p>
        <p>{{ t("texts.with") }} 
          <a href="https://yasminweddings.com/" target="_blank">Yasmin Abdullahi</a>, 
          <a href="https://hannahlaunerdesign.de/" target="_blank">Hannah Launer</a>
        </p>
        <div class="spacer"></div>
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
    <video preload="auto" autoplay="autoplay" muted="muted" alt="odds&amp;ends: Motivation video" loop="loop" controls="controls" playsinline="">
      <source :src="videoSrc" type="video/mp4">
    </video>
    <img :src="images[2]" class="image" :alt="t('projects.odds_and_ends.images.3')"><div class="spacer"></div>
    <img :src="images[3]" class="image" :alt="t('projects.odds_and_ends.images.4')"><div class="spacer"></div>
    <img :src="images[4]" class="image" :alt="t('projects.odds_and_ends.images.5')"><div class="spacer"></div>
  </div>
</template>

<script>

import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
cloud: {
  cloudName: 'dqxwy7joy'
}
}); 

export default {
setup() {

  const { locale, locales, t } = useI18n()

  definePageMeta({
    title: 'pages.titles.project.odds_and_ends',
    description: 'SEO.project.odds_and_ends',
  })

  const images = [
    cld.image("Studio Rotstich/mxldk0hh4iu3fdzjuvle").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/ple4sojn7f4sbovacdpn").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/lgob4bdv7alwpzuuvl2a").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/wizfhcimwbgbg8wllojx").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/glezrk9l7zqbt3lgcndt").format('auto').quality('20').toURL(),
  ]
  
  const videoSrc = '/odds_and_ends.mp4'
  
  return {
    images, t, videoSrc
  }
},
}
</script>