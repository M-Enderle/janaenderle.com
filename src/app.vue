<template>
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
      <CookieBanner />
      <img :src="arrowUpSrc" width="50px" class="arrow-up" :class="{ 'hide': hideArrow }" @click="scrollToTop" alt="Scroll up icon"/>
    </NuxtLayout>
  </template>
  
  <script>
  import { useStore } from 'vuex'
  import { onMounted, onBeforeUnmount, watch } from 'vue'
  import CookieBanner from '@/components/CookieBanner.vue'
  
  export default {
    data() {
      return {
        hideArrow: false,
        arrowUpSrc: '/svg/arrow_up.svg'
      }
    },
    setup() {
      
      const store = useStore()
  
      // Initialize isMobile and gridMode states
      const initializeState = () => {
        if (window.innerWidth >= 768) {
          store.dispatch('setIsMobile', false)
        } else {
          store.dispatch('setIsMobile', true)
        }
  
        // Retrieve gridMode from localStorage
        const gridMode = localStorage.getItem('gridMode')
        if (gridMode !== null) {
          store.dispatch('setGridMode', gridMode === 'true')
        }
      }
  
      if (typeof window !== 'undefined') {
        initializeState()
      }

      // Tracking moved to consent plugin. Do not initialize here.

      // Log user's consent decision (client-only)
      if (process.client) {
        const consent = useCookie('site_consent', { default: () => 'unset' })
        console.log('[Consent] current:', consent.value)
        watch(() => consent.value, (v) => {
          console.log('[Consent] updated:', v)
        })
      }
  
      return { store }
    },

    mounted() {
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleScroll)
      
      // Initial state setup
      this.handleResize()
      this.handleScroll()
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handleScroll)
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
        this.hideArrow = window.scrollY <= 100;
      },
      toggleGridMode() {
        this.$store.dispatch('setGridMode', !this.$store.state.gridMode)
        localStorage.setItem('gridMode', this.$store.state.gridMode)
      }
    }
  }
  </script>
  
  <style scoped>
  .arrow-up {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  
  .hide {
    opacity: 0;
    pointer-events: none;
  }
  </style>
  