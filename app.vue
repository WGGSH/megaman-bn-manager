<template>
  <v-app :theme="theme">
    <vite-pwa-manifest />
    <layout-global-navigation-drawer
      :drawer="drawer"
      :decks="decksWithNameAndId"
      @drawer-update="onUpdateDrawer"
      @add-deck="onAddDeck"
      @select-deck="onSelectDeck"
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
const decksWithNameAndId = computed(() => deckManagerStore.decksWithNameAndId);

const router = useRouter();

const onUpdateDrawer = (newVal) => {
  drawer.value = newVal;
};

onMounted(() => {
  const localTheme = localStorage.getItem('theme') || 'light';
  themeStore.setTheme(localTheme);
  deckManagerStore.fetch();
});

const onAddDeck = () => {
  const deck = deckManagerStore.addDeck();
  router.push({ path: `/deck/${deck.id}/abstract` });
};

const onSelectDeck = (id) => {
  router.push({ path: `/deck/${id}/abstract` });
};
</script>
