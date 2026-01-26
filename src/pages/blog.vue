<template>
    <h1 class="error_title">{{ t('pages.blog.title') }}</h1>
    <p class="error_message">{{ t('pages.blog.message') }}</p>
</template>
  
<script>
  import { useStore } from 'vuex'
  
  export default {
  
      setup() {
          const store = useStore()
          const { t } = useI18n()

          definePageMeta({
              title: 'pages.titles.blog',
              description: 'defaultSEO',
          })

          if (typeof window !== 'undefined') {
          if (window.innerWidth >= 768) {
              store.dispatch('setIsMobile', false)
          } else {
              store.dispatch('setIsMobile', true)
          }
          }
          return { t }
      },
  
      mounted() {
          window.addEventListener('resize', this.handleResize)
          if (window.innerWidth >= 768) {
              this.$store.dispatch('setIsMobile', false)
          } else {
              this.$store.dispatch('setIsMobile', true)
          }
      },
  
      beforeUnmount() {
          window.removeEventListener('resize', this.handleResize)
      },
  
      methods: {
          handleResize() {
              if (window.innerWidth >= 768) {
                  this.$store.dispatch('setIsMobile', false)
              } else {
                  this.$store.dispatch('setIsMobile', true)
              }
          }
      }
  }
</script>

<style>
h1 {
    font-size: 8vh;
    font-weight: 400;
}

.error_title {
    margin-top: 10vh;
    margin-bottom: 2vh;
}

.error_message {
    margin-bottom: 50vh;
}
</style>
  