<script setup>
const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.page_titles.index',
  description: 'defaultSEO'
})

navigateTo(t("pages.routes.projects"), { redirectCode: 301 })


</script>

<template>
</template>