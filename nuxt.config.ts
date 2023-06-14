// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  router: {
    base: '/megaman-bn-manager/',
  },
  app: {
    cdnURL: '/megaman-bn-manager',
  },
  generate: {
    dir: 'docs',
  },
  modules: ['nuxt-3-vuetify'],
  vuetify: {
    scssSettingSrc: 'settings.scss',
    vuetifyOptions: {
      defaults: {},
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],
});
