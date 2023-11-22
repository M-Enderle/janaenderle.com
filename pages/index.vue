<script setup>
const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.page_titles.index',
  description: 'default_seo',
})

await navigateTo(t('pages.routes.projects'))

</script>

<template>
</template>