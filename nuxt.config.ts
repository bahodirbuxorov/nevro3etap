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
  },

  app: {
    head: {
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      script: [
        {
          // Meta Pixel — standart snippet, boshqa hech qanday Meta kodi yo'q.
          // Eventlarni (Lead va h.k.) Meta o'zi hisoblaydi: Events Manager sozlamalari.
          children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1033859056095788');
fbq('track', 'PageView');`,
          type: 'text/javascript'
        },
        {
          // SAIVO tracker (api.meta.saivo.uz) — o'z analitika servisimiz (Adtru snippet).
          // wid = shu sayt uchun berilgan workspace identifikatori.
          src: 'https://api.meta.saivo.uz/tracker.js?wid=9056a3cb-4ab7-4db9-af59-65dfe5963295',
          async: true
        }
      ],
      noscript: [
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1033859056095788&ev=PageView&noscript=1" />`,
          body: true
        }
      ],
    },
  },
});