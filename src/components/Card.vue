<template>
    <div style="margin-top: 50px"></div>
    <nuxt-link :to="project.url">
        <div class="image_wrapper">
            <img :src="image" :alt="project.alt" class="desktop image">
            <img :src="mobile_image" :alt="project.alt" class="mobile image">
        </div>
        <div style="margin-top: 20px"></div>
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

import { Cloudinary } from '@cloudinary/url-gen';
import { useI18n } from 'vue-i18n'

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dqxwy7joy'
    }
});

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        let mobile_image = cld.image("Studio Rotstich/mobile/" + props.project.mobileImageID).format('auto').quality('40').toURL();
        let image = cld.image("Studio Rotstich/" + props.project.imageID).format('auto').quality('35').toURL();
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
}
</style>