<template>
  <v-app :theme="theme.theme">
    <vite-pwa-manifest />
    <layout-global-navigation-drawer
      :drawer="drawer"
      :builds="buildsWithNameAndId"
      @drawer-update="onUpdateDrawer"
      @add-build="onAddBuild"
      @select-build="onSelectBuild"
    />

    <layout-global-header
      @on-click-nav-icon="onUpdateDrawer"
      @on-click-title="goHome"
      @on-click-setting-icon="goSetting"
      @on-click-information-icon="goInformation"
    />

    <v-main>
      <nuxt-page />
    </v-main>

    <layout-global-footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useThemeStore } from '@/store/theme';
import { useBuildManagerStore } from '@/store/build-manager';

const drawer = ref<boolean>(false);

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);

const buildManagerStore = useBuildManagerStore();
const buildsWithNameAndId = computed(
  () => buildManagerStore.buildsWithNameAndId,
);

const router = useRouter();

const onUpdateDrawer = (newVal: boolean) => {
  drawer.value = newVal;
};

onMounted(() => {
  themeStore.initialize();
  buildManagerStore.fetch();
});

const onAddBuild = () => {
  const build = buildManagerStore.addBuild();
  router.push({ path: `/build/${build.id}/abstract` });
};

const onSelectBuild = (id: Number) => {
  router.push({ path: `/build/${id}/abstract` });
};

const goHome = () => {
  router.push({ path: '/' });
};

const goSetting = () => {
  router.push({ path: '/setting' });
};

const goInformation = () => {
  router.push({ path: '/information' });
};
</script>
