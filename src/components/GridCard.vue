<template>
    <div>
        <nuxt-link :to="project.url">
            <div class="gridcard-container" :style="{ backgroundImage: 'url(' + mobile_image + ')' }">
                <div class="cutout-text" v-if="project.title">{{ t(project.title) }}</div>
            </div>
        </nuxt-link>
    </div>
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
    name: 'GridCard',
    props: {
        project: {
            type: Object,
            required: true
        },
    },

    setup(props) {
        let mobile_image = cld.image("Studio Rotstich/mobile/" + props.project.mobileImageID).format('auto').quality('40').toURL();
        let image = cld.image("Studio Rotstich/" + props.project.imageID).format('auto').quality('35').toURL();
        const { t } = useI18n()

        return {
            image, mobile_image, t
        }
    },
}
</script>

<style lang="scss">
.gridcard-container {
    position: relative;
    /* Needed to position the cutout text in the middle of the image */
    width: 500px;
    /* Some height */
    background-size: cover;
    /* Cover the whole container */
    aspect-ratio: 1;
    /* Square aspect ratio */
    margin: 3px 0;
    /* Some margin */
    width: 100%;
}

.cutout-text {
    background-color: white;
    color: black;
    font-size: 4vw;
    /* Responsive font size */
    font-weight: bold;
    margin: 0 auto;
    /* Center the text container */
    padding: 10px;
    width: 90%;
    text-align: center;
    /* Center text */
    position: absolute;
    /* Position text */
    top: 50%;
    /* Position text in the middle */
    left: 50%;
    /* Position text in the middle */
    transform: translate(-50%, -50%);
    /* Position text in the middle */
    mix-blend-mode: screen;
    /* This makes the cutout text possible */
    display: none;
}

.gridcard-container:hover .cutout-text {
    display: block;
    /* Show the cutout text on hover */
}
</style>