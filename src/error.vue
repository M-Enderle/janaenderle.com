<template>
    <Navbar />
        <h1 class="error_title">Oh Oh..</h1>
        <p class="error_message">Ich designe viel aber das hier gibt's nicht.</p>
    <Footer />
</template>
  
<script>
  import { useStore } from 'vuex'
  
  export default {
  
      setup() {
          const store = useStore()
  
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
  