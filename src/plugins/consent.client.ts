export default defineNuxtPlugin(() => {
  if (process.server) return

  const consent = useCookie<string>('site_consent', { default: () => 'unset' })

  const initGtag = () => {
    if (window.dataLayer) return
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

    // Expose conversion helper safely
    // @ts-ignore
    window.gtag_report_conversion = function(url = '') {
      const callback = function () {
        if (typeof(url) != 'undefined' && url) {
          window.location = url;
        }
      };
      try {
        // @ts-ignore
        gtag('event', 'conversion', {
            'send_to': 'AW-17503016741/ePFkCP6w2Y8bEKWui5pB',
            'event_callback': callback
        });
        return true;
      } catch (error) {
        console.error('Error sending conversion event:', error);
        return false;
      }
    };
  }

  // Provide a global initializer called by CookieBanner on accept
  // @ts-ignore
  window.__initAnalytics = () => {
    initGtag()
    import('@vercel/analytics').then(({ inject }) => {
      try { inject() } catch (_) {}
    })
  }

  // Auto-init if consent was previously accepted
  if (consent.value === 'accepted') {
    initGtag()
    import('@vercel/analytics').then(({ inject }) => {
      try { inject() } catch (_) {}
    })
  }
})


