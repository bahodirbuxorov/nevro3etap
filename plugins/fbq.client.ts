// SPA navigatsiya PageView'lari — FAQAT shu yerda.
// Initial PageView nuxt.config.ts dagi pixel snippet ichida (fbq('track','PageView')),
// shuning uchun bu yerda birinchi navigatsiya (from.name yo'q) o'tkazib yuboriladi —
// aks holda sahifa ochilishida 2 ta PageView ketadi.
export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.afterEach((to, from) => {
    if (typeof window === 'undefined' || !window.fbq) return;

    // from.name → initial hydration emas; to.path !== from.path → haqiqiy sahifa o'zgarishi
    if (from.name && to.path !== from.path) {
      window.fbq('track', 'PageView');
    }
  });
});
