<template>
  <NuxtLayout>
    <Navbar />
    <RouterView />
    <Footer />
  </NuxtLayout>
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
