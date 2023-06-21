<template>
  <v-footer color="secondary" app border class="pa-0 pb-4">
    <v-card
      elevation="0"
      tile
      width="100%"
      class="text-center"
      color="secondary"
    >
      <v-card-text class="pa-2">
        <v-btn
          v-for="menu in footerMenus"
          :key="menu.icon"
          class="mx-auto"
          variant="plain"
          :to="menu.link"
        >
          <v-icon size="36px">
            {{ menu.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const footerMenus = ref([
  {
    icon: 'mdi-home',
    link: '/build/abstract',
  },
  {
    icon: 'mdi-face-man',
    link: '/build/navi',
  },
  {
    icon: 'mdi-chip',
    link: '/build/folder',
  },
  {
    icon: 'mdi-credit-card-multiple',
    link: '/build/card',
  },
  {
    icon: 'mdi-cog',
    link: '/setting',
  },
]);
</script>
