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
  runtimeConfig: {
    public: {
      baseURL: '/megaman-bn-manager/',
    },
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
      name: 'megaman-bn-manager',
      description: 'ロックマンエグゼ6の構築管理ツール',
      theme_color: '#ffffff',
      lang: 'ja',
      short_name: 'エグゼ6管理',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      icons: [
        {
          src: 'icons/72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'icons/128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'icons/144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icons/192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: 'icons/512.png',
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
      source: 'icons/512.png',
    },
  },
});
