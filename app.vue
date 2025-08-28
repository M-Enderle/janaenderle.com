<template>
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
      <NuxtImg src="/arrow_up.svg" width="50px" class="arrow-up" :class="{ 'hide': hideArrow }" @click="scrollToTop" alt="Scroll up icon"/>
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
  import { onMounted, onBeforeUnmount } from 'vue'
  
  export default {
    data() {
      return {
        hideArrow: false,
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

      // Google Ads / gtag sitewide tag
      if (typeof window !== 'undefined') {
        // Inject gtag only once
        if (!window.dataLayer) {
          // eslint-disable-next-line no-undef
          useHead({
            script: [
              { src: 'https://www.googletagmanager.com/gtag/js?id=AW-17503016741', async: true },
              {
                children: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', 'AW-17503016741');
                `
              }
            ]
          })
        }
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
  