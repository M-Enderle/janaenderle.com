<template>
  <div class="project">
    <h1 class="project-title">TheSharp.<wbr>Club</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.thesharp_club.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.thesharp_club.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t('texts.thesharp_club.1.1') }}</p>
        <div class="spacer"></div>
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
      title: 'pages.titles.project.thesharp_club',
      description: 'SEO.project.thesharp_club',
    })

    const images = [
      cld.image('Studio Rotstich/SharpClub_Karton_Innen_u9bfi0').format('auto').quality('20').toURL(),
      cld.image('Studio Rotstich/SharpClub_Kleben_pl3x2d').format('auto').quality('20').toURL(),
      cld.image('Studio Rotstich/SharpClub_Flyer_u02txe').format('auto').quality('20').toURL()
    ]
    
    return {
      images, t
    }
  },
}
</script>