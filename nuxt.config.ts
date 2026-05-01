export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  runtimeConfig: {
    // Server-side only — .env orqali override qilinadi
    telegramBotToken: '',
    telegramChatId: '',
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
          children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1362385449249859');
fbq('track', 'PageView');`,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1362385449249859&ev=PageView&noscript=1" />`,
          body: true
        }
      ],
    },
  },
});