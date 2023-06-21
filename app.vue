<template>
  <v-app :theme="theme">
    <vite-pwa-manifest />
    <layout-global-navigation-drawer
      :drawer="drawer"
      :builds="buildsWithNameAndId"
      @drawer-update="onUpdateDrawer"
      @add-build="onAddBuild"
      @select-build="onSelectBuild"
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
import { useBuildManagerStore } from '@/store/buildManager';

const drawer = ref<Boolean>(false);

const themeStore = useThemeStore();
const theme = computed(() => themeStore.value);

const buildManagerStore = useBuildManagerStore();
const buildsWithNameAndId = computed(() => buildManagerStore.buildsWithNameAndId);

const router = useRouter();

const onUpdateDrawer = (newVal) => {
  drawer.value = newVal;
};

onMounted(() => {
  const localTheme = localStorage.getItem('theme') || 'light';
  themeStore.setTheme(localTheme);
  buildManagerStore.fetch();
});

const onAddBuild = () => {
  const build = buildManagerStore.addBuild();
  router.push({ path: `/build/${build.id}/abstract` });
};

const onSelectBuild = (id) => {
  router.push({ path: `/build/${id}/abstract` });
};
</script>
