<template>
  <NuxtLayout>
    <Navbar />
    <RouterView />
    <Footer />
    <NuxtImg src="/arrow_up.svg" width="50px" class="arrow-up" :class="{ 'hide': hideArrow }" @click="scrollToTop" />
  </NuxtLayout>

  <!--
     _____        
 ___|    _|__     
|    \  /  | |    
|     \/   | | _  
|__/\__/|__|_||_| 
    |_____|       
                                                                                                                                                                                           
  -->
</template>

<script>
import { useStore } from 'vuex'

export default {

    data() {
        return {
            hideArrow: false, // Add this line
        }
    },

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
        window.addEventListener('scroll', this.handleScroll)
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
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },

        handleScroll() {
            if (window.scrollY > 100) {
                this.hideArrow = false
            } else {
                this.hideArrow = true
            }
        }
    }
}
</script>
