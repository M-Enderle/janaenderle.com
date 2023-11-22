<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = "Studio Rotstich" + t(route.meta.title)
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <slot />
      </Body>
    </Html>
  </div>
</template>

<style lang="scss">

  @font-face {
    font-family: 'Sora';
    src:  url('../static/Sora.woff2') format('woff2');
  }

  $color-primary: white;
  $color-secondary: black;
  $color-tertiary: rgb(255, 26, 26);

  html {
    font-family: 'Sora', sans-serif;
    background-color: $color-primary;
    color: $color-secondary;
    text-decoration: none;
    font-size: 25px;
    font-weight: 400;
    cursor: url(@/Cursor-black.png) 20 20, auto;
  }

  body {
    padding: 0 20px;
    margin: 0;
    cursor: url(@/Cursor-black.png) 20 20, auto;
  }

  a {
    text-decoration: none;
    color: $color-secondary;
  }

  a:hover {
    text-decoration: none;
    color: $color-tertiary;
  }

  button {
    font-family: 'Sora', sans-serif;
    background-color: $color-primary;
    color: $color-secondary;
    padding: 0;
    margin: 0;
    border: None;
    cursor: pointer;
    font-size: 25px;
    font-weight: 400;
  }

  button:hover {
    color: $color-tertiary;
  }

</style>