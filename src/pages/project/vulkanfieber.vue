<template>
  <div class="project">
    <h1 class="project-title">Vulkanfieber</h1>
    <div class="buttons">
      <NuxtLink :to="localePath(t('projects.vulkanfieber.previous'))"><NuxtImg src="/icons/arrow.png" width="20px" /></NuxtLink>
      <NuxtLink :to="localePath(t('projects.vulkanfieber.next'))"><NuxtImg src="/icons/arrow.png" width="20px" style="transform: rotate(180deg)" /></NuxtLink>
    </div>
    <div class="thirds">
      <div class="third">
        <p>{{ t("texts.vulkanfieber.1.1") }}</p>
        <p>{{ t("texts.vulkanfieber.1.2") }}</p>
        <p>{{ t("texts.with") }} 
          <a href="https://yasminweddings.com/" target="_blank">Yasmin Abdullahi</a>, 
          <a href="https://www.instagram.com/marenmesle/" target="_blank">Maren Mesle</a>
        </p>
        <div class="spacer"></div>
      </div>
      <div class="third">
        <p>{{ t("texts.vulkanfieber.2.1") }}</p><br>
        <p>{{ t("texts.vulkanfieber.2.2") }}</p><br>
      </div>
    </div>
    <img :src="images[0]" class="image" :alt="t('projects.vulkanfieber.images.1')"><div class="spacer"></div>
    <img :src="images[1]" class="image" :alt="t('projects.vulkanfieber.images.2')">
    <h2>{{ t("texts.vulkanfieber.3") }}</h2>
    <img :src="images[2]" class="image" :alt="t('projects.vulkanfieber.images.3')"><div class="spacer"></div>
    <img :src="images[3]" class="image" :alt="t('projects.vulkanfieber.images.4')"><div class="spacer"></div>
    <img :src="images[4]" class="image" :alt="t('projects.vulkanfieber.images.5')"><div class="spacer"></div>
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
    title: 'pages.titles.project.vulkanfieber',
    description: 'SEO.project.vulkanfieber',
  })

  const images = [
    cld.image("Studio Rotstich/jy63r1hpw2fvgsg2mbxa").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/adzm33ak5qguz6ejajgg").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/zj8xchtjspmcrwemfzrq").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/u77ookdb7gxwaehe3mcl").format('auto').quality('20').toURL(),
    cld.image("Studio Rotstich/kr5rrhuq3kqditaictft").format('auto').quality('20').toURL(),
  ]
  
  return {
    images, t
  }
},
}
</script>