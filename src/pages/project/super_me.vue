<template>
    <div class="project">
      <h1 class="project-title">SUPER ME</h1>
      <div class="buttons">
      <NuxtLink :to="localePath(t('projects.super_me.previous'))"><NuxtImg src="/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.super_me.next'))"><NuxtImg src="/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
      <div class="thirds">
        <div class="third">
          <p>{{ t("texts.super_me.1.1") }}</p>
          <p>{{ t("texts.super_me.1.2") }}</p>
          <div class="spacer"></div>
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
      title: 'pages.titles.project.super_me',
      description: 'SEO.project.super_me',
    })

    const images = [
      cld.image("Studio Rotstich/z3lhyyecsghqswgpbciq").format('auto').quality('20').toURL(),
      cld.image("Studio Rotstich/zkis9rqjh5sat9uhugks").format('auto').quality('20').toURL(),
      cld.image("Studio Rotstich/k18lzpeuupkm3iybjk2e").format('auto').quality('20').toURL(),
      cld.image("Studio Rotstich/yekn1rijsk1h6acgniay").format('auto').quality('20').toURL(),
      cld.image("Studio Rotstich/a9wslmnqdbpqs8oww91h").format('auto').quality('20').toURL(),
      cld.image("Studio Rotstich/kfca1oyzwzyfqdmw53wr").format('auto').quality('20').toURL(),
    ]
    
    return {
      images, t
    }
  },
}
</script>