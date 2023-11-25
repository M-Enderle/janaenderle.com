<script setup>
definePageMeta({
  title: 'pages.titles.about'
})

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div>
    <p>{{ t('welcome') }}</p>
  </div>
</template>
