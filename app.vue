<template>
  <NuxtLayout>
    <Navbar />
    <RouterView />
    <Footer />
  </NuxtLayout>

  <!--
     _____        
 ___|    _|__     
|    \  /  | |    
|     \/   | | _  
|__/\__/|__|_||_| 
    |_____|       
                                                        
     _____                                                       
  __|___  |__  ____   _  _____   ______  _____   ____    ______  
 |   ___|    ||    \ | ||     \ |   ___||     | |    |  |   ___| 
 |   ___|    ||     \| ||      \|   ___||     \ |    |_ |   ___| 
 |______|  __||__/\____||______/|______||__|\__\|______||______| 
    |_____|                                                      
                                                                                                                                          
  -->
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
