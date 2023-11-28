<script setup>

const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.titles.project.super_me',
  description: 'SEO.project.super_me',
})

</script>

<template>
    <div class="project">
      <h1>SUPER ME</h1>
      <div class="thirds">
        <div class="third">
          <p>{{ t("texts.super_me.1.1") }}</p>
          <p>{{ t("texts.super_me.1.2") }}</p>
        </div>
        <div class="third">
          <p>{{ t("texts.super_me.2.1") }}</p><br>
          <p>{{ t("texts.super_me.2.2") }}</p><br>
          <p>{{ t("texts.super_me.2.3") }}</p><br>
        </div>
      </div>
    </div>
</template>