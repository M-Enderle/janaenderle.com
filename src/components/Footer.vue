<template>
    
        <div class="footer">
            <div class="third">
                <nuxt-link :to="t('pages.routes.imprint')">{{ t('pages.titles.imprint') }}</nuxt-link><br>
                <nuxt-link :to="t('pages.routes.privacy')">{{ t('pages.titles.privacy') }}</nuxt-link>
                <ClientOnly>
                <div style="margin-top: 21px" v-if="isMobile">
                    Copyright © 2026 <br>
                    Jana Enderle
                </div>
            </ClientOnly>
            </div>
            <div class="third">
                <a target="_blank" rel="noopener noreferrer" href="mailto:hello@janaenderle.com" @click="toggle_mobile_nav">Mail</a><br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/studio.rotstich/" @click="toggle_mobile_nav">Instagram</a><br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jana-enderle/" @click="toggle_mobile_nav">LinkedIn</a><br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/shop/Janascreativestudio?ref=search_shop_redirect" @click="toggle_mobile_nav">Etsy</a><br>
            </div>
        <ClientOnly>
            <div class="third" v-if="!isMobile">
                Copyright © 2026 Jana Enderle
            </div>
        </ClientOnly>
            
    </div>
    
</template>
<script>

import { useStore } from 'vuex'

export default {
    setup() {
        const { locale, locales, t, setLocale } = useI18n()
        const store = useStore()
        const isMobile = computed(() => store.state.isMobile)

        return {
            isMobile,
            t, locale, locales, setLocale
        }
    },
}
</script>

<style lang="scss">

.footer {
    font-size: 1.5rem;
    color: black;
    font-weight: 300;
    font-size: 16px;
}

.third {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 5vh;
    align-items: flex-start;
}

</style>