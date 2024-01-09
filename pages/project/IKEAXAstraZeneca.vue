<template>
  <div class="project">
    <h1 class="project-title">IKEA X AstraZeneca</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.IKEAXAstraZeneca.previous'))"><NuxtImg src="/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.IKEAXAstraZeneca.next'))"><NuxtImg src="/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t("texts.IKEAXAstraZeneca.1.1") }}</p>
        <p>{{ t("texts.IKEAXAstraZeneca.1.2") }}</p>
        <div class="spacer"></div>
      </div>
      <div class="third">
        <p>{{ t("texts.IKEAXAstraZeneca.2.1") }}</p><br>
        <p>{{ t("texts.IKEAXAstraZeneca.2.2") }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.IKEAXAstraZeneca.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.IKEAXAstraZeneca.images.2')"><div class="spacer"></div>
    <img :src="images[2]" class="image" :alt="t('projects.IKEAXAstraZeneca.images.3')"><div class="spacer"></div>
    <h2>{{ t("texts.IKEAXAstraZeneca.3") }}</h2>
    <img :src="images[3]" class="image" :alt="t('projects.IKEAXAstraZeneca.images.4')"><div class="spacer"></div>
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
    title: 'pages.titles.project.IKEAXAstraZeneca',
    description: 'SEO.project.IKEAXAstraZeneca',
  })

  const images = [
    cld.image("Studio Rotstich/gehuhl22ttn4zpsbjxpy").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/slvtenpesbyw4kpg4ryl").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/cnivphcl2kii4v8b2sut").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/kf51fx0wupjqeyljbt8u").format('auto').quality('20').toURL(),
  ]
  
  return {
    images, t
  }
},
}
</script>