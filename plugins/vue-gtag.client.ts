// plugins/vue-gtag.client.js
import VueGtag from 'vue-gtag-next';
import googleAnalytics from '@/assets/private/google-analytics.json';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: googleAnalytics.id,
    },
  });
});
