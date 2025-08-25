
<template>
  <div class="about">
    <h1>{{ t('texts.about.title') }}</h1>
    <div class="thirds">
      <div class="third">
        <img :src="myImage" alt="Jana Enderle, the lead designer at Studio Rotstich" class="image">
      </div>
      <div class="third">
        <div class="spacemobile"></div>
        <p>{{ t('texts.about.text1') }}</p>
        <div class="space"></div>
        <p>{{ t('texts.about.text2') }}</p>
      </div>
      <div class="third">
        <div class="spacemobile"></div>
        <p>{{ t('texts.about.history.1.1') }}</p>
        <p>{{ t('texts.about.history.1.2') }}</p>
        <div class="space"></div>
        <p>{{ t('texts.about.history.2.1') }}</p>
        <p>{{ t('texts.about.history.2.2') }}</p>
        <p>{{ t('texts.about.history.2.3') }}</p>
        <div class="space"></div>
        <p>{{ t('texts.about.history.3.1') }}</p>
        <p>{{ t('texts.about.history.3.2') }}</p>
        <div class="space"></div>
        <p>{{ t('texts.about.history.4.1') }}</p>
        <p>{{ t('texts.about.history.4.2') }}</p>
        <div class="space"></div>
        <p>{{ t('texts.about.history.5.1') }}</p>
        <p>{{ t('texts.about.history.5.2') }}</p>
        <div class="space"></div>
        <p>{{ t('texts.about.history.6.1') }}</p>
        <p>{{ t('texts.about.history.6.2') }}</p>
        <p>{{ t('texts.about.history.6.3') }}</p>
      </div>
    </div>
  </div>
  <div style="margin-top: 100px"></div>
</template>

<script>
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dqxwy7joy'
  }
}); 

export default {
  setup() {

    const { locale, locales, t } = useI18n()

    definePageMeta({
      title: 'pages.titles.about',
      description: 'SEO.about',
    })

    const myImage = cld.image("Studio Rotstich/2022_Jana_Basel-2-2_1_jgczkq.jpg").format('auto').quality('20').toURL();
    return {
        myImage, t
    }
  },
}
</script>

<style lang="scss">
  .thirds {
    display: grid;
    grid-template-columns: 32.66% 32.66% 32.66%;
    grid-gap: 1%;
  }

  .third {
    display: block;
    hyphens: auto;
  }

  .space {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    .thirds {
      display: block;
    }

    .spacemobile {
      margin-bottom: 15px;
    }
  }

  .image {
    width: 100%;
  }

</style>