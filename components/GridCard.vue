<template>
    <div>
        <img :src="mobile_image" :alt="alt" class="te">
    </div>
</template>

<script>

import { Cloudinary } from '@cloudinary/url-gen';

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
        return {
            image, mobile_image
        }
    },
}
</script>

<style lang="scss">
.te {
    width: 100%;
}
</style>