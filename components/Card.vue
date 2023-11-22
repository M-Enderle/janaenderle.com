<template>
    <nuxt-link :to="url">
        <div class="image_wrapper">
            <NuxtImg class="image" :src="imagePath" :alt="alt" />
        </div>
        <div class="scroll-container">
            <div class="scroll-text">
            <span v-for="i in speed" :key="i" class="no_hover_text">
                {{ title }}
            </span>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        imagePath: {
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
    computed: {
        speed() {
            console.log(this.title.length);
            return Math.floor(200/this.title.length);
        }
    }
}
</script>

<style lang="scss">
.image_wrapper {
    padding: 20px 0;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}

.scroll-container {
  overflow: hidden;
  white-space: nowrap;
}

.scroll-text {
  display: inline-block;
  animation: scroll-right 60s linear infinite;
  font-size: 80px;
  font-weight: 400;
}

@keyframes scroll-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-90%);
  }
}

.no_hover_text {
    text-decoration: none;
    color: black;
}

</style>