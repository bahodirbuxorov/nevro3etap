export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  router.afterEach((to, from) => {
    // Route o'zgargandagina track qilamiz (duplicate oldini olish)
    if (to.path !== from.path) {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
      }
    }
  });
});
