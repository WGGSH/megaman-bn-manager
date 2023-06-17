<template>
  <v-app :theme="theme">
    <vite-pwa-manifest />
    <global-navigation-drawer
      :drawer="drawer"
      :decks="decks"
      @drawer-update="updateDrawer"
      @add-deck="addDeck"
    />

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
import { ref, computed } from 'vue';
import { useThemeStore } from '@/store/theme';
import { useDeckManagerStore } from '@/store/deckManager';

const drawer = ref<Boolean>(false);

const themeStore = useThemeStore();
const theme = computed(() => themeStore.value);

const deckManagerStore = useDeckManagerStore();

const decks = computed(() => deckManagerStore.decksWithNameAndId);

const onClick = () => {
  drawer.value = !drawer.value;
};

const updateDrawer = (newVal) => {
  drawer.value = newVal;
};

onMounted(() => {
  const localTheme = localStorage.getItem('theme') || 'light';
  themeStore.setTheme(localTheme);
  deckManagerStore.initialize();
});

const addDeck = () => {
  deckManagerStore.addDeck();
};
</script>
