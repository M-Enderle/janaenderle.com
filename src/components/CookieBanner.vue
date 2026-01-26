<template>
  <ClientOnly>
    <div class="banner-outer">
      <div v-if="showBanner" class="cookie-banner">
        <div class="halves">
          <div class="half">
            <img :src="'/svg/Cookie.svg'" alt="Cookie" class="cookie-icon" />
          </div>
          <div class="half">
            <h3>Cookies</h3>
            <p>{{ t('texts.cookie.message') }}</p>
          </div>
        </div>
        <div class="button-group">
          <nuxt-link :to="t('pages.routes.privacy')" class="privacy-btn">{{ t('texts.cookie.privacy') }}</nuxt-link>
          <button @click="decline" class="decline-btn">{{ t('texts.cookie.decline') }}</button>
          <button @click="accept" class="accept-btn">{{ t('texts.cookie.accept') }}</button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const { t } = useI18n()

const consent = useCookie('site_consent', {
  default: () => 'unset',
  maxAge: 60 * 60 * 24 * 365
})

const showBanner = computed(() => consent.value !== 'accepted' && consent.value !== 'declined')

const accept = () => {
  consent.value = 'accepted'
  if (typeof window !== 'undefined' && typeof window.__initAnalytics === 'function') {
    try { window.__initAnalytics() } catch (_) {}
  }
}

const decline = () => {
  consent.value = 'declined'
}
</script>



<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9999;
  background: var(--color-bg, #fff);
  color: var(--color-text, #000);
  padding: 20px 30px;
  border: 2px solid #000;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.15);
  width: min-content;
}

.halves {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.half {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  padding: 20px;
}

.half:nth-child(2) {
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: 300;
}

.half h3 {
  font-weight: 400;
  margin: 0;
  margin-bottom: 15px;
}

.half p {
  font-weight: 400;
  margin: 0;
}

.cookie-icon {
  width: 100px;
}

.button-group {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  font-size: 16px;
}

.button-group button {
  font-size: 19px;
  padding: 7px 20px;
}

.button-group .privacy-btn {
  font-size: 19px;
  padding: 7px 20px;
}

.button-group button:nth-child(3) {
  border: 1.5px solid #000;
}

/* Mobile responsive styles */
@media (max-width: 768px) {

  .banner-outer {
    overflow-x: hidden;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
    left: 0;
    z-index: 9999;
  }

  .cookie-banner {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    width: 85%;
    padding: 15px;
  }

  .halves {
    flex-direction: column;
    text-align: center;
  }

  .half {
    padding: 5px;
  }

  .half h3 {
    margin-bottom: 8px;
  }

  .half:nth-child(2) {
    align-items: center;
  }

  .cookie-icon {
    width: 60px;
  }

  .button-group {
    flex-direction: column-reverse;
    gap: 8px;
    margin-top: 5px;
  }

  .button-group button,
  .button-group .privacy-btn {
    font-size: 16px;
    padding: 8px 16px;
    width: 100%;
    text-align: center;
    display: block;
    box-sizing: border-box;
  }
}

</style>
