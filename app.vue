<template>
  <v-app>
    <global-navigation-drawer :drawer="drawer" />

    <global-header />

    <v-main>
      <nuxt-page />
    </v-main>

    <global-footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
let drawer = ref(false);
</script>
