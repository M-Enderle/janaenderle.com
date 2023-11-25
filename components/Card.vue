<template>
    <div style="margin-top: 50px"></div>
    <a :href="url">
        <div class="image_wrapper">
            <NuxtImg class="image" :src="imagePath" :alt="alt" />
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
            return Math.round(1000/(this.title.length + 10));
        }
    }
}
</script>

<style lang="scss">

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
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