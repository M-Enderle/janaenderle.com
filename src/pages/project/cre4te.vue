<template>
  <div class="project">
    <h1 class="project-title">CRE4TE</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.cre4te.previous'))"><NuxtImg src="/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.cre4te.next'))"><NuxtImg src="/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t("texts.cre4te.1.1") }}</p>
        <p>{{ t("texts.cre4te.1.2") }}</p>
        <div class="spacer"></div>
      </div>
      <div class="third">
        <p>{{ t("texts.cre4te.2.1") }}</p><br>
        <p>{{ t("texts.cre4te.2.2") }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.cre4te.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.cre4te.images.2')">
    <h2>{{ t("texts.cre4te.3") }}</h2>
    <img :src="images[2]" class="image" :alt="t('projects.cre4te.images.3')"><div class="spacer"></div>
    <img :src="images[3]" class="image" :alt="t('projects.cre4te.images.4')"><div class="spacer"></div>
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
    title: 'pages.titles.project.cre4te',
    description: 'SEO.project.cre4te',
  })

  const images = [
    cld.image("Studio Rotstich/jz2yg6bcwovuvuh3hczt").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/tf3qnznv2mdgp89qwnel").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/gel2yzd5vpob99zphr3a").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/of0nafb12yowjrlyjqwq").format('auto').quality('20').toURL(),
  ]
  
  return {
    images, t
  }
},
}
</script>