export default defineNuxtPlugin(() => {
  if (process.server) return
  const consent = useCookie('site_consent', { default: () => 'unset' })
  if (consent.value !== 'accepted') return

  // Lazy import only when consented
  import('@vercel/analytics').then(({ inject }) => {
    try { inject() } catch (_) {}
  })
});