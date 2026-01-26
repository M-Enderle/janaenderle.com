<template>
    <div class="top-spacer"></div>
    <nuxt-link :to="project.url" :target="project.target">
        <div class="image_wrapper">
            <img :src="image" :alt="project.alt" class="desktop image">
            <img :src="mobile_image" :alt="project.alt" class="mobile image">
        </div>
        <div class="spacer"></div>
        <div class="scroll-container" v-if="project.title">
            <div class="scroll-text">
                <span v-for="i in speed" :key="i" class="no_hover_text" >
                    {{ t(project.title) }} +&#8203;
                </span>
            </div>
        </div>
    </nuxt-link>
</template>

<script>

import { imageUrl } from '@/utils/cloudinary'
import { useI18n } from 'vue-i18n'

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        let mobile_image = imageUrl("Studio Rotstich/mobile/" + props.project.mobileImageID, true);
        let image = imageUrl("Studio Rotstich/" + props.project.imageID);
        const { t } = useI18n()

        return {
            image, mobile_image, t
        }
    },
    computed: {
        speed() {
            return Math.round(1000 / (this.t(this.project.title).length + 10));
        },
    }
}
</script>

<style lang="scss">
.image {
    width: 100%;
}

.scroll-container {
    overflow: hidden;
    white-space: nowrap;
    margin: -10px -10px;
}

.scroll-text {
    display: inline-block;
    animation: scroll-right 110s linear infinite;
    font-size: 8vh;
    font-weight: 400;
}

@keyframes scroll-right {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-80%);
    }
}

.no_hover_text {
    text-decoration: none;
    color: black;
}

.spacer {
    margin-top: 10px;
}

.top-spacer {
    margin-top: 30px;
}

.desktop {
    display: none;
}

@media screen and (min-width: 768px) {
    .scroll-text {
        font-size: 7.5vh;
    }

    .mobile {
        display: none;
    }

    .desktop {
        display: block;
    }

    .scroll-container {
        margin: -20px -20px;
    }

    .spacer {
        margin-top: 30px;
    }

    .top-spacer {
        margin-top: 50px;
    }
}
</style>