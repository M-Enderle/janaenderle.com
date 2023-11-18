<script setup>
const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.index'
})

const switchLocalePath = useSwitchLocalePath()
</script>

<template>
    <div>
    <h1>{{ t('welcome') }}</h1>
  </div>
</template>