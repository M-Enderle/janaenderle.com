<template>
    <div id="navbar" v-show="!isMobile">
        <a id="logo" class="nav_third" :href="t('pages.routes.projects')">
            <div id="studio_name">Studio Rotstich</div>
            <div>Jana Enderle</div>
        </a>
        <div id="main_navigation" class="nav_third">
            <nuxt-link :to="t('pages.routes.projects')" id="navbar_projects">{{ t('pages.titles.projects') }}</nuxt-link>
            <div id="seperator-plus">+</div>
            <nuxt-link :to="t('pages.routes.free_hand')" id="navbar_free_hand">{{ t('pages.titles.free_hand') }}</nuxt-link>
        </div>
        <div id="right_nav" class="nav_third">
            <button v-if="locale === 'en'" @click="setLocale('de')" id="lang_button">DE</button>
            <button v-if="locale === 'de'" @click="setLocale('en')" id="lang_button">EN</button>
            <nuxt-link :to="t('pages.routes.about')">{{ t('pages.titles.about') }}</nuxt-link>
        </div>
    </div>
    <div id="navbar" v-show="isMobile" >
        <div id="logo" @click="navigateTo(t('pages.routes.projects'))">
            <div id="studio_name">Studio Rotstich</div>
            <div>Jana Enderle</div>
        </div>
        <div id="unfold_plus" @click="toggle_mobile_nav">
            +
        </div>
    </div>
    <div id="nav_mobile_unfolded" class="folded" v-show="isMobile">
        <nuxt-link :to="t('pages.routes.projects')" id="navbar_projects" @click="toggle_mobile_nav">{{ t('pages.titles.projects') }}</nuxt-link>
        <nuxt-link :to="t('pages.routes.free_hand')" id="navbar_free_hand" @click="toggle_mobile_nav">{{ t('pages.titles.free_hand') }}</nuxt-link>
        <nuxt-link :to="t('pages.routes.about')" @click="toggle_mobile_nav">{{ t('pages.titles.about') }}</nuxt-link>
        <div class="spacer" style="height: 3vh"></div>
        <a target="_blank" rel="noopener noreferrer" href="mailto:hello@janaenderle.com" @click="toggle_mobile_nav">Mail</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/studio.rotstich/" @click="toggle_mobile_nav">Instagram</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jana-enderle/" @click="toggle_mobile_nav">LinkedIn</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/shop/Janascreativestudio?ref=search_shop_redirect" @click="toggle_mobile_nav">Etsy</a>
        <div class="spacer" style="height: 3vh"></div>
        <a v-if="locale === 'en'" @click="setLocale('de')" id="lang_button">Deutsch</a>
        <a v-if="locale === 'de'" @click="setLocale('en')" id="lang_button">Englisch</a>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const isMobile = computed(() => store.state.isMobile)
        const { locale, locales, t, setLocale } = useI18n()

        return {
            isMobile,
            t, locale, locales, setLocale
        }
    },

    data() {
        return {
            url: this.$route.path
        }
    },

    mounted() {
        const logo = document.getElementById("logo");
        logo.addEventListener("mouseover", function( event ) {
            const studioName = event.currentTarget.querySelector("#studio_name");
            studioName.textContent = "Studio Ro+s+tich";
        });
        logo.addEventListener("mouseout", function( event ) {
            const studioName = event.currentTarget.querySelector("#studio_name");
            studioName.textContent = "Studio Rotstich";
        });

        const url = window.location.href;
        
    },

    methods: {
        toggle_mobile_nav() {
            const nav_mobile_unfolded = document.getElementById("nav_mobile_unfolded");
            const unfold_plus = document.getElementById("unfold_plus");
            if (nav_mobile_unfolded.classList.contains("unfolded")) {
                nav_mobile_unfolded.classList.remove("unfolded");
                nav_mobile_unfolded.classList.add("folded");
                unfold_plus.style.transform = "rotate(0deg)";
                document.body.style.overflow = "auto";
            } else {
                nav_mobile_unfolded.classList.remove("folded");
                nav_mobile_unfolded.classList.add("unfolded");
                unfold_plus.style.transform = "rotate(45deg)";
                document.body.style.overflow = "hidden";
            }

        }
        
    }
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

#logo:hover {
    cursor: pointer;
    color: black;
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

#unfold_plus {
    font-size: 80px;
    font-weight: 100;
    line-height: 70px;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76); 
    -ms-transition: -ms-transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76); 
    transition: transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76);
}

#nav_mobile_unfolded {
    position: fixed;
    background-color: white;
    padding: 10px 0;
    width: 100%;
    top: 90px;
    height: calc(var(--vh, 1vh) * 100 - 100px);
    z-index: 100;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    a {
        width: 100%;
        display: inherit;
        font-size: 6vh;
    }

}

.unfolded {
    left: 0;
}

.folded {
    left: -105vw;
}

#navbar-wrapper {
    justify-content: center;
    align-items: center;
    width: 100%;
}

.router-link-active {
    color: rgb(255, 26, 26);
}

</style>