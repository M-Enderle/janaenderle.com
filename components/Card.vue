<template>
    <div style="margin-top: 50px"></div>
    <a :href="url">
        <div class="image_wrapper">
            <img :src="myImage" :alt="alt" class="image">
        </div>
        <div style="margin-top: 20px"></div>
        <div class="scroll-container">
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
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const myImage = cld.image("Studio Rotstich/" + props.imageID).format('auto').quality('30').toURL();
        return {
            myImage
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
  font-size: 6vh;
  font-weight: 500;
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

</style>