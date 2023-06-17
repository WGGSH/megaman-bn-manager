<template>
  <v-app :theme="theme">
    <vite-pwa-manifest />
    <layout-global-navigation-drawer
      :drawer="drawer"
      :decks="decks"
      @drawer-update="onUpdateDrawer"
      @add-deck="onAddDeck"
      @select-deck="onSeleckDeck"
    />

    <layout-global-header @on-click-nav-icon="onUpdateDrawer" />

    <v-main>
      <nuxt-page />
    </v-main>

    <layout-global-footer />
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

const router = useRouter();

const onUpdateDrawer = (newVal) => {
  drawer.value = newVal;
};

onMounted(() => {
  const localTheme = localStorage.getItem('theme') || 'light';
  themeStore.setTheme(localTheme);
  deckManagerStore.initialize();
});

const onAddDeck = () => {
  deckManagerStore.addDeck();
};

const onSeleckDeck = (id) => {
  deckManagerStore.selectDeckById(id);
  router.push({ path: '/deck/abstract' });
};
</script>
