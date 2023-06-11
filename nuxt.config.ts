// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  router: {
    base: "/megaman-bn-manager/",
  },
  app: {
    cdnURL: "/megaman-bn-manager",
  },
  generate: {
    dir: "docs",
  },
  modules: ["nuxt-3-vuetify"],
  vuetify: {
    scssSettingSrc: "settings.scss",
    vuetifyOptions: {
      defaults: {},
    },
  },
});
