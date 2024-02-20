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
        :mobileImageID="'drirbfm0onnubjpnr9xa'"
        :alt="t('free_hand.calendar.alt')" 
        :title="t('free_hand.calendar.title')" 
        :url="t('free_hand.calendar.href')" 
  /> 

  <Card :imageID="'c5r32k5uh1eqcvpxach5'"
        :mobileImageID="'opxd3snqumxsqsamslyv'"
        :alt="t('free_hand.linol.alt')" 
        :url="t('free_hand.linol.href')" 
  /> 

  <Card :imageID="'klkpetd2snocoqvcgyjx'"
        :mobileImageID="'vkv0ggnclzy4nqgl5wyz'" 
        :alt="t('free_hand.card.alt')" 
        :url="t('free_hand.card.href')" 
  /> 

  <Card :imageID="'rkw34nnlj9fk7g9uz1za'" 
        :mobileImageID="'r43eywgbfpvu4oceswfw'" 
        :alt="t('free_hand.placemat.alt')" 
  /> 

</template>
