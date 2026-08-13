export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  nitro: {
    // Deploy target aniqlanadi:
    // - Vercel CI (VERCEL=1) → 'vercel' (Vercel'ning native output formati)
    // - dev → 'node-server'
    // - qolgani (Cloudflare wrangler build/deploy) → 'cloudflare-module'
    // NITRO_PRESET env berilsa — u hammasidan ustun.
    preset: process.env.NITRO_PRESET
      || (process.env.VERCEL ? 'vercel'
        : process.env.NODE_ENV === 'development' ? 'node-server'
          : 'cloudflare-module'),
  },

  runtimeConfig: {
    // Server-side only — Cloudflare dashboard va .env orqali override qilinadi
    telegramBotToken: '',
    telegramChatId: '',
    telegramChatIdNevroslim3: '',
    bitrixWebhookUrl: '',
    public: {
      pixelMap: '',
    }
  },

  app: {
    head: {
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ],
    },
  },
});