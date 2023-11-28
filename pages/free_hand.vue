<script setup>

const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.free_hand',
  description: 'SEO.free_hand',
})

</script>

<template>
  <h1 style="display: none">Studio Rotstich - {{ t("pages.titles.free_hand") }}</h1>

  <Card :imageID="'j85rp5bo5oczvxgqqjeh'" 
        :alt="t('free_hand.calendar.alt')" 
        :title="t('free_hand.calendar.title')" 
        :url="t('free_hand.calendar.href')" 
  /> 

  <Card :imageID="'klkpetd2snocoqvcgyjx'" 
        :alt="t('free_hand.card.alt')" 
        :url="t('free_hand.card.href')" 
  /> 

  <Card :imageID="'rkw34nnlj9fk7g9uz1za'" 
        :alt="t('free_hand.placemat.alt')" 
  /> 

</template>

<style lang="scss">

</style>