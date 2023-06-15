<template>
  <v-app>
    <vite-pwa-manifest />
    <global-navigation-drawer :drawer="drawer" @drawer-update="updateDrawer" />

    <global-header @on-click-nav-icon="updateDrawer" />

    <v-main>
      <nuxt-page />
      <v-btn @click="onClick">
        test
      </v-btn>
    </v-main>

    <global-footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref<Boolean>(false);

const onClick = () => {
  drawer.value = !drawer.value;
};

const updateDrawer = (newVal) => {
  drawer.value = newVal;
};
</script>
