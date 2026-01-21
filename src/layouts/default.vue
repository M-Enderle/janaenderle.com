<script setup>
const consent = process.client ? useCookie('site_consent', { default: () => 'unset' }) : { value: 'unset' }
const SpeedInsightsComp = shallowRef(null)

if (process.client) {
  const maybeLoad = () => {
    if (consent.value === 'accepted' && !SpeedInsightsComp.value) {
      import('@vercel/speed-insights/vue').then(m => {
        SpeedInsightsComp.value = markRaw(m.SpeedInsights)
      })
    }
  }
  watch(() => consent.value, maybeLoad, { immediate: true })
}

const route = useRoute()

const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const { url } = useCldImageUrl({
  options: {
    src: "Studio Rotstich/2022_Jana_Basel-2-2_1_jgczkq.jpg",
    width: "1200",
    height: "630",
  }
})

const title = t(route.meta.title)
const description = t(route.meta.description)

// Google tag moved to app.vue to ensure sitewide load and single injection
</script>

<template>
  <component :is="SpeedInsightsComp" v-if="SpeedInsightsComp" />
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

        <Meta name="description" hid="description" :content="description" />
        <Meta name="msvalidate.01" content="8BB110BB289ECF54AC00E4B1184EA1AF" />
        
        <!-- Icons -->
        <Link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <Link rel="icon" type="image/png" href="/favicons/favicon-google.png" />
        <Link rel="manifest" href="/site.webmanifest" />

        <!-- OpenGraph -->
        <Meta property="og:title" hid="og-title" :content="title" />
        <Meta property="og:description" hid="og-description" :content="t('defaultSEO')" /> 
        <Meta property="og:image" hid="og-image" :content="url" />
        <Meta property="og:url" hid="og-url" content="https://janaenderle.com" />
        <Meta property="og:type" hid="og-type" content="website" />

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
    src:  url('/fonts/Sora.woff2') format('woff2');
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
    overflow-x: hidden;
    width: 100vw;
  }

  body {
    @media (max-width: 767px) {
      padding: 0 10px;
    }
    @media (min-width: 768px) {
      padding: 0 20px;
    }
    margin: 0 auto;
    max-width: 2500px;
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

  /* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */

/* total width */
body::-webkit-scrollbar {
    background-color: #fff;
    width: 7px;
}

/* background of the scrollbar except button or resizer */
body::-webkit-scrollbar-track {
    background-color: #fff;
}

/* scrollbar itself */
body::-webkit-scrollbar-thumb {
    background-color: #737373;
    border-radius: 16px;
    border: 2px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
body::-webkit-scrollbar-button {
    display:none;
}

p {
  margin: 0;
  font-size: 16px;
  font-weight: 300;
}

h1, .project h2 {
  font-size: 100px;
  font-weight: 400;
  margin: 30px 0;
  line-height: 110%;
  letter-spacing: -1px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.arrow-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  transform: rotate(-90deg);
  transition: opacity 300ms;
}

.hide {
  opacity: 0;
  transition: opacity 300ms;
  pointer-events: none;
}

</style>