<template>
  <div class="project">
    <h1 class="project-title">Leni's Sweet & Salty</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.lenis.previous'))"><NuxtImg src="/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.lenis.next'))"><NuxtImg src="/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t("texts.lenis.1.1") }}</p>
        <div class="spacer"></div>
      </div>
      <div class="third">
        <p>{{ t("texts.lenis.2.1") }}</p><br>
        <p>{{ t("texts.lenis.2.2") }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.lenis.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.lenis.images.2')">
    <h2>{{ t("texts.lenis.3") }}</h2>
    <img :src="images[2]" class="image" :alt="t('projects.lenis.images.3')"><div class="spacer"></div>
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
    title: 'pages.titles.project.lenis',
    description: 'SEO.project.lenis',
  })

  const images = [
    cld.image("Studio Rotstich/kr4glizwz3ob9o6xdhzm").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/r44c1bugwcpk6udynhuj").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/rjtuefx7vuuj4lvedkk5").format('auto').quality('20').toURL(),
  ]
  
  return {
    images, t
  }
},
}
</script>