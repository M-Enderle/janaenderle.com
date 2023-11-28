<script setup>
const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.index',
  description: 'defaultSEO'
})

navigateTo(t("pages.routes.projects"), { redirectCode: 301 })
</script>

<template>
  <p>If you don't get redirected, click <a href="/projects">here</a>.</p>
  <p>Wenn du nicht weitergeleitet wirst, klicke <a href="/de/projekte">hier</a>.</p>
</template>