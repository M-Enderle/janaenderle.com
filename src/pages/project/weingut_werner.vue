<template>
  <div class="project">
    <h1 class="project-title">Weingut Werner</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.weingut_werner.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.weingut_werner.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t('texts.weingut_werner.1.1') }}</p>
        <div class="spacer"></div>
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
      title: 'pages.titles.project.weingut_werner',
      description: 'SEO.project.weingut_werner',
    })

    const images = [
      cld.image('Studio Rotstich/WernerWeingut_Flasche_mjvgsl').format('auto').quality('20').toURL(),
      cld.image('Studio Rotstich/WernerWeingut_Reben_rg8lyq').format('auto').quality('20').toURL()
    ]
    
    return {
      images, t
    }
  },
}
</script>