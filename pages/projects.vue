<script setup>

const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.projects'
})

</script>

<template>
  <Card :imagePath="'/images/StudioRotstich_SUPERME_Startseite.jpg'" 
        :alt="t('projects.super_me.images.front.alt')" 
        :title="t('projects.super_me.title') + ' + '" 
        :url="t('projects.super_me.path')" 
  /> 
  <Card :imagePath="'/images/Lenis_Startseite.jpg'" 
        :alt="t('projects.lenis.images.front.alt')" 
        :title="t('projects.lenis.title') + ' + '" 
        :url="t('projects.lenis.path')" 
  /> 
  <Card :imagePath="'/images/IKEAXAstraZeneca_Startseite.jpg'" 
        :alt="t('projects.IKEAXAstraZeneca.images.front.alt')" 
        :title="t('projects.IKEAXAstraZeneca.title') + ' + '" 
        :url="t('projects.IKEAXAstraZeneca.path')" 
  /> 
  <Card :imagePath="'/images/odds_ends_Startseite.jpg'" 
        :alt="t('projects.odds_and_ends.images.front.alt')" 
        :title="t('projects.odds_and_ends.title') + ' + '" 
        :url="t('projects.odds_and_ends.path')" 
  /> 
  <Card :imagePath="'/images/Vulkanfieber_Startseite.jpg'" 
        :alt="t('projects.vulkanfieber.images.front.alt')" 
        :title="t('projects.vulkanfieber.title') + ' + '" 
        :url="t('projects.vulkanfieber.path')" 
  /> 
  <Card :imagePath="'/images/CRE4TE_Startseite.jpg'" 
        :alt="t('projects.cre4te.images.front.alt')" 
        :title="t('projects.cre4te.title') + ' + '" 
        :url="t('projects.cre4te.path')" 
  /> 
</template>

<script>
export default {
  mounted() {
    // get id="navbar_projects" and change it to the red
    const navbar_free_hand= document.getElementById("navbar_free_hand");
    navbar_free_hand.style.color = "black";
    const navbar_projects = document.getElementById("navbar_projects");
    navbar_projects.style.color = "rgb(255, 26, 26)";
  }
}
</script>

<style lang="scss">
</style>
