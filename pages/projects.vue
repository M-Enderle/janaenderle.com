<script setup>

const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.projects',
  description: 'SEO.projects',
})

</script>

<template>

  <h1 style="display: none">Studio Rotstich - {{ t("pages.titles.projects") }}</h1>

  <Card :imageID="'m4qfb3n2sxstadl3za2r'"
        :mobileImageID="'y9cax5heidbqufxrv3yy'"
        :alt="t('projects.super_me.images.front')" 
        :title="t('projects.super_me.title')" 
        :url="t('projects.super_me.path')" 
  /> 
  <Card :imageID="'kf2qo9kd2yaxongtzy44'" 
        :mobileImageID="'byp6rgplmsbltdkyska2'"
        :alt="t('projects.lenis.images.front')" 
        :title="t('projects.lenis.title')" 
        :url="t('projects.lenis.path')" 
  /> 
  <Card :imageID="'j1mnrsywkwmrkhknw6kg'" 
        :mobileImageID="'tmtyeemgy56vw6kujyx6'"
        :alt="t('projects.IKEAXAstraZeneca.images.front')" 
        :title="t('projects.IKEAXAstraZeneca.title')" 
        :url="t('projects.IKEAXAstraZeneca.path')" 
  /> 
  <Card :imageID="'uxcqpnglmtl2shbolu3j'" 
        :mobileImageID="'spivkzcya2ks1v71enbx'"
        :alt="t('projects.odds_and_ends.images.front')" 
        :title="t('projects.odds_and_ends.title')" 
        :url="t('projects.odds_and_ends.path')" 
  /> 
  <Card :imageID="'xp5kmuhkhfvdgtieff0y'" 
        :mobileImageID="'tknjkur0thaffq46um7y'"
        :alt="t('projects.vulkanfieber.images.front')" 
        :title="t('projects.vulkanfieber.title')" 
        :url="t('projects.vulkanfieber.path')" 
  /> 
  <Card :imageID="'ckguvelcu7tahwvnuzls'" 
        :mobileImageID="'agylusnxghug4b6ublsz'"
        :alt="t('projects.cre4te.images.front')" 
        :title="t('projects.cre4te.title')" 
        :url="t('projects.cre4te.path')" 
  /> 
</template>

<style lang="scss">
</style>
