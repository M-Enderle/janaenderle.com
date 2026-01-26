<template>
    <h1 class="error_title">Wir freuen uns. Schauen wir mal...</h1>
    <p class="error_message">was wird. Ich arbeite fleißig dran.</p>
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
  