<template>
    <div style="margin-top: 50px"></div>
    <a :href="url">
        <div class="image_wrapper">
            <img :src="image" :alt="alt" class="desktop image">
            <img :src="mobile_image" :alt="alt" class="mobile image">
        </div>
        <div style="margin-top: 20px"></div>
        <div class="scroll-container" v-if="title">
            <div class="scroll-text">
            <span v-for="i in speed" :key="i" class="no_hover_text">
                {{ title }} +&#8203;
            </span>
            </div>
        </div>
    </a>
</template>

<script>

import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dqxwy7joy'
  }
}); 

export default {
    props: {
        imageID: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: true
        },
        mobileImageID: {
            type: String,
            required: true
        },
    },
    setup(props) {
        let mobile_image = cld.image("Studio Rotstich/mobile/" + props.mobileImageID).format('auto').quality('40').toURL();
        let image = cld.image("Studio Rotstich/" + props.imageID).format('auto').quality('35').toURL();

        return {
            image, mobile_image
        }
    },
    computed: {
        speed() {
            return Math.round(1000/(this.title.length + 10));
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
  margin: -20px -20px;
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
}


</style>