<template>
    <div id="navbar">
        <div id="logo" class="nav_third">
            <div id="studio_name">Studio Rotstich</div>
            <div>Jana Enderle</div>
        </div>
        <div id="main_navigation" class="nav_third">
            <nuxt-link :to="t('pages.routes.projects')" id="navbar_projects">{{ t('pages.titles.projects') }}</nuxt-link>
            <div id="seperator-plus">+</div>
            <nuxt-link :to="t('pages.routes.free_hand')" id="navbar_free_hand">{{ t('pages.titles.free_hand') }}</nuxt-link>
        </div>
        <div id="right_nav" class="nav_third">
            <button v-if="locale === 'en'" @click="setLocale('de')" id="lang_button">DE</button>
            <button v-if="locale === 'de'" @click="setLocale('en')" id="lang_button">EN</button>
            <nuxt-link :to="t('pages.routes.about')" >{{ t('pages.titles.about') }}</nuxt-link>
        </div>
    </div>
</template>

<script setup>
const { locale, locales, t, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<script>
export default {
    mounted() {
        const studio_name = document.getElementById("studio_name");
        studio_name.addEventListener("mouseover", function( event ) {
            event.target.textContent = "Studio Ro+s+tich";
        });
        studio_name.addEventListener("mouseout", function( event ) {
            event.target.textContent = "Studio Rotstich";
        });
    },
}
</script>

<style lang="scss">

#navbar {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding-top: 10px;
    z-index: 2;
}

#main_navigation {
    display: flex;
    justify-content: center;
    width: 50%;

    #seperator-plus {
        margin: 0 10px;
    }
}

#right_nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    button {
        margin-right: 40px;
    }
}

.studio_name_hover {
    color: rgb(255, 26, 26);
}

#studio_name {
    transition: all 0.5s ease;
}

.nav_third {
    width: 33%;
}

#lang_button {
    background-color: transparent;
}

</style>