// PageView manba nuqtasi — bu YAGONA joy, nuxt.config.ts da faqat fbq('init') bor.
// Ushbu plugin:
//   - Birinchi yuklanishda (!from.name) — initial PageView
//   - Haqiqiy route o'zgarishida (to.path !== from.path) — SPA navigatsiya PageView
// Boshqa hech qayerda fbq('track', 'PageView') chaqirilmasligi kerak.
export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.afterEach((to, from) => {
    if (typeof window === 'undefined' || !window.fbq) return;

    // !from.name → birinchi navigatsiya (initial hydration)
    // to.path !== from.path → haqiqiy sahifa o'zgarishi
    if (!from.name || to.path !== from.path) {
      window.fbq('track', 'PageView');
    }
  });
});
