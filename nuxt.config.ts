// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt/config';
import { ThemeDefinition } from './src/theme-definition';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  target: 'static',
  router: {
    base: '/megaman-bn-manager/',
  },
  app: {
    baseURL: '/megaman-bn-manager/',
    cdnURL: '/megaman-bn-manager/',
    link: [
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
  },
  generate: {
    dir: 'docs',
  },
  components: [
    '~/components',
  ],
  modules: ['@invictus.codes/nuxt-vuetify', '@vite-pwa/nuxt', '@pinia/nuxt'],
  alias: {
    // https://stackoverflow.com/questions/74003458/cannot-find-module-pinia-dist-pinia-mjs-when-using-run-dev
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  vuetify: { // https://www.npmjs.com/package/@invictus.codes/nuxt-vuetify
    vuetifyOptions: {
      theme: {
        defaultTheme: ThemeDefinition.defaultTheme,
        // variations: ThemeDefinition.variations,
        themes: ThemeDefinition.themes,
      },
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico'],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'name',
      description: 'description',
      theme_color: '#ffffff',
      lang: 'ja',
      short_name: 'short_name',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      icons: [
        {
          src: 'icons/36x36.png',
          sizes: '36x36',
          type: 'image/png',
        },
        {
          src: 'icons/48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: 'icons/72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'icons/96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icons/128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'icons/144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: 'icons/384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'icons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
    icon: {
      source: 'icon.png',
    },
  },
});
