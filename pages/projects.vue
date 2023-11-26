<script setup>

const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.projects'
})

</script>

<template>
  <Card :imageID="'m4qfb3n2sxstadl3za2r'" 
        :alt="t('projects.super_me.images.front.alt')" 
        :title="t('projects.super_me.title')" 
        :url="t('projects.super_me.path')" 
  /> 
  <Card :imageID="'kf2qo9kd2yaxongtzy44'" 
        :alt="t('projects.lenis.images.front.alt')" 
        :title="t('projects.lenis.title')" 
        :url="t('projects.lenis.path')" 
  /> 
  <Card :imageID="'j1mnrsywkwmrkhknw6kg'" 
        :alt="t('projects.IKEAXAstraZeneca.images.front.alt')" 
        :title="t('projects.IKEAXAstraZeneca.title')" 
        :url="t('projects.IKEAXAstraZeneca.path')" 
  /> 
  <Card :imageID="'uxcqpnglmtl2shbolu3j'" 
        :alt="t('projects.odds_and_ends.images.front.alt')" 
        :title="t('projects.odds_and_ends.title')" 
        :url="t('projects.odds_and_ends.path')" 
  /> 
  <Card :imageID="'xp5kmuhkhfvdgtieff0y'" 
        :alt="t('projects.vulkanfieber.images.front.alt')" 
        :title="t('projects.vulkanfieber.title')" 
        :url="t('projects.vulkanfieber.path')" 
  /> 
  <Card :imageID="'ckguvelcu7tahwvnuzls'" 
        :alt="t('projects.cre4te.images.front.alt')" 
        :title="t('projects.cre4te.title')" 
        :url="t('projects.cre4te.path')" 
  /> 
</template>

<script>
export default {
  mounted() {
    const navbar_free_hand= document.getElementById("navbar_free_hand");
    navbar_free_hand.style.color = "black";
    const navbar_projects = document.getElementById("navbar_projects");
    navbar_projects.style.color = "rgb(255, 26, 26)";
  }
}
</script>

<style lang="scss">
</style>
