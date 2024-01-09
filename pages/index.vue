<script>

export default {
  setup() {
    definePageMeta({
      title: 'pages.titles.index',
      description: 'defaultSEO'
    })
    const { locale, locales, t } = useI18n()
    return {
      t
    }
  },
  mounted() {
    const { locale, locales, t } = useI18n()
    navigateTo(t("pages.routes.projects"), { redirectCode: 301 })
  }
}

</script>

<template>
  <p>If you don't get redirected, click <a href="/projects">here</a>.</p>
  <p>Wenn du nicht weitergeleitet wirst, klicke <a href="/de/projekte">hier</a>.</p>
  <a href="/de"></a>
</template>