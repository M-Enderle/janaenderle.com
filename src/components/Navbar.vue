<template>
    <div class="navbar" id="navdesktop">
        <nuxt-link class="logo nav_third" :to="t('pages.routes.index')" style="color: black !important">
            <div class="studio_name">Studio Rotstich</div>
            <div>Jana Enderle</div>
        </nuxt-link>
        <div id="main_navigation" class="nav_third">
            <nuxt-link :to="t('pages.routes.index')" id="navbar_projects">{{ t('pages.titles.projects') }}</nuxt-link>
            <div id="seperator-plus">+</div>
            <nuxt-link :to="t('pages.routes.free_hand')" id="navbar_free_hand">{{ t('pages.titles.free_hand') }}</nuxt-link>
            <div id="seperator-plus">+</div>
            <nuxt-link :to="t('pages.routes.blog')" id="navbar_blog">{{ t('pages.titles.blog') }}</nuxt-link>

        </div>
        <div id="right_nav" class="nav_third">
            <img :src="fullscreenIconSrc" height="30px" class="grid-fullscreen" v-show="gridMode" @click="toggleGrid" alt="Enable Full Screen" v-if="currentRoute.fullPath === t('pages.routes.index') || currentRoute.fullPath === t('pages.routes.free_hand')"/>
            <img :src="rasterIconSrc" height="30px" class="grid-fullscreen" v-show="!gridMode" @click="toggleGrid" alt="Enable Grid Mode" v-if="currentRoute.fullPath === t('pages.routes.index') || currentRoute.fullPath === t('pages.routes.free_hand')"/>
            <button v-if="locale === 'en'" @click="setLocale('de')" id="lang_button">DE</button>
            <button v-if="locale === 'de'" @click="setLocale('en')" id="lang_button">EN</button>
            <nuxt-link :to="t('pages.routes.about')" id="navbar_about">{{ t('pages.titles.about') }}</nuxt-link>
            <nuxt-link :to="t('pages.routes.contact')" id="navbar_contact">{{ t('pages.titles.contact') }}</nuxt-link>
        </div>
    </div>
    <div class="navbar" id="navmobile" v-show="isMobile">
        <nuxt-link class="logo" :to="t('pages.routes.index')" style="color: black !important">
            <div class="studio_name">Studio Rotstich</div>
            <div>Jana Enderle</div>
        </nuxt-link>
        <div class="right-nav">
            <img :src="fullscreenIconSrc" height="30px" class="grid-fullscreen" v-show="gridMode" @click="toggleGrid" alt="Enable Full Screen" v-if="currentRoute.fullPath === t('pages.routes.index') || currentRoute.fullPath === t('pages.routes.free_hand')"/>
            <img :src="rasterIconSrc" height="30px" class="grid-fullscreen" v-show="!gridMode" @click="toggleGrid" alt="Enable Grid Mode" v-if="currentRoute.fullPath === t('pages.routes.index') || currentRoute.fullPath === t('pages.routes.free_hand')"/>
            <div id="unfold_plus" @click="toggle_mobile_nav">
                +
            </div>
        </div>
        
    </div>
    <div id="nav_mobile_unfolded" class="folded" v-show="isMobile">
        <nuxt-link :to="t('pages.routes.index')" id="navbar_projects" @click="toggle_mobile_nav">{{ t('pages.titles.projects') }}</nuxt-link>
        <nuxt-link :to="t('pages.routes.free_hand')" id="navbar_free_hand" @click="toggle_mobile_nav">{{ t('pages.titles.free_hand') }}</nuxt-link>
        <nuxt-link :to="t('pages.routes.blog')" id="navbar_blog" @click="toggle_mobile_nav">{{ t('pages.titles.blog') }}</nuxt-link>
        <nuxt-link :to="t('pages.routes.contact')" @click="toggle_mobile_nav">{{ t('pages.titles.contact') }}</nuxt-link>
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
        const gridMode = computed(() => store.state.gridMode)
        const { locale, locales, t, setLocale } = useI18n()
        const { currentRoute } = useRouter();

        const fullscreenIconSrc = '/svg/Website_Icon_Fullscreen.svg'
        const rasterIconSrc = '/svg/Website_Icon_Raster.svg'

        return {
            isMobile,
            t, locale, locales, setLocale, gridMode, store, currentRoute,
            fullscreenIconSrc, rasterIconSrc
        }
    },

    data() {
        return {
            url: this.$route.path
        }
    },

    mounted() {
        const logo = document.getElementsByClassName("logo")[0];
        logo.addEventListener("mouseover", function( event ) {
            const studioName = event.currentTarget.querySelector(".studio_name");
            studioName.textContent = "Studio Ro+s+ich";
        });
        logo.addEventListener("mouseout", function( event ) {
            const studioName = event.currentTarget.querySelector(".studio_name");
            studioName.textContent = "Studio Rotstich";
        });
    },

    methods: {
        toggle_mobile_nav() {
            const nav_mobile_unfolded = document.getElementById("nav_mobile_unfolded");
            const unfold_plus = document.getElementById("unfold_plus");
            if (nav_mobile_unfolded.classList.contains("unfolded")) {
                nav_mobile_unfolded.classList.remove("unfolded");
                nav_mobile_unfolded.classList.add("folded");
                unfold_plus.classList.remove("rotated");
                document.body.style.overflow = "auto";
            } else {
                nav_mobile_unfolded.classList.remove("folded");
                nav_mobile_unfolded.classList.add("unfolded");
                unfold_plus.classList.add("rotated")
                document.body.style.overflow = "hidden";
                document.body.style.height = "auto";
            }

        },
        toggleGrid() {
            this.$store.dispatch('setGridMode', !this.gridMode)
        }
    }
}
</script>

<style lang="scss">

.navbar {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding-top: 10px;
    z-index: 2;
}

@media (max-width: 768px) {
    #navdesktop {
        display: none;
    }
}

@media (min-width: 769px) {
    #navmobile {
        display: none;
    }
}

.logo:hover {
    color: black;
}

.logo {
    cursor: pointer;
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
    gap: 18px;

    button {
        margin-right: 0;
    }

    .grid-fullscreen {
        margin-right: 0;
        cursor: pointer;

        &:hover {
            filter: invert(32%) sepia(83%) saturate(5598%) hue-rotate(348deg) brightness(97%) contrast(111%);
        }

    }

}

.studio_name_hover {
    color: rgb(255, 26, 26);
}

.studio_name {
    transition: all 0.5s ease;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.nav_third {
    width: 33%;
}

#lang_button {
    background-color: transparent;
}

#unfold_plus {
    font-size: 75px;
    font-weight: 100;
    line-height: 70px;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76); 
    -ms-transition: -ms-transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76); 
    transition: transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76);
}



.rotated {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76); 
    -ms-transition: -ms-transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76); 
    transition: transform 0.3s cubic-bezier(0.78, -0.91, 0.31, 1.76);
}

#nav_mobile_unfolded {
    padding: 10px;
    position: fixed;
    background-color: white;
    width: 100%;
    top: 95px;
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

#navmobile {

    display: grid;
    grid-template-columns: 2.5fr 1fr;
    justify-content: end;

    .right-nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .grid-fullscreen {
        height: 38px;
        margin-right: 20px;
    }

    .logo {
        font-size: 7vw;
    }

    .grid-fullscreen {
        height: 35px;
        margin-right: 15px;
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