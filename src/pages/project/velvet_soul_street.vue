<template>
  <div class="project">
    <h1 class="project-title">Velvet Soul Street</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.velvet_soul_street.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.velvet_soul_street.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t('texts.velvet_soul_street.1.1') }}</p>
        <div class="spacer"></div>
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
      title: 'pages.titles.project.velvet_soul_street',
      description: 'SEO.project.velvet_soul_street',
    })

    const images = [
      cld.image('Studio Rotstich/VelvetSoul_Shirt_x6d9qn').format('auto').quality('20').toURL(),
      cld.image('Studio Rotstich/VelvetSoul_Sticker_rqvr2q').format('auto').quality('20').toURL(),
      cld.image('Studio Rotstich/VelvetSoul_Schild_aeqqaj').format('auto').quality('20').toURL(),
    ]
    
    return {
      images, t
    }
  },
}
</script>