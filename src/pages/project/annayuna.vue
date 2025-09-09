<template>
  <div class="project">
    <h1 class="project-title">ANNA YUNA</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.annayuna.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.annayuna.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t("texts.annayuna.1.1") }}</p>
        <div class="spacer"></div>
      </div>
      <div class="third">
        <p>{{ t("texts.annayuna.2.1") }}</p><br>
        <p>{{ t("texts.annayuna.2.2") }}</p><br>
        <p>{{ t("texts.annayuna.2.3") }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.annayuna.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.annayuna.images.2')"><div class="spacer"></div>
    <img :src="images[2]" class="image" :alt="t('projects.annayuna.images.3')"><div class="spacer"></div>
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
    title: 'pages.titles.project.annayuna',
    description: 'SEO.project.annayuna',
  })

  const images = [
    cld.image("Studio Rotstich/z1hcvfhb8bnqlflqo0qf").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/emsmgrq5mqoapnl2j26j").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/g4qwy7jw4bkiewm6ngew").format('auto').quality('20').toURL(),
  ]
  
  return {
    images, t
  }
},
}
</script>