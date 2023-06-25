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
          @click="changeRoute(menu.path)"
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

import { useBuildManagerStore } from '@/store/build-manager';

const router = useRouter();

const buildManagerStore = useBuildManagerStore();

const selectedBuildId = computed(() => buildManagerStore.selectedBuildId);

const footerMenus = ref([
  {
    icon: 'mdi-home',
    path: 'abstract',
  },
  {
    icon: 'mdi-face-man',
    path: 'navi',
  },
  {
    icon: 'mdi-chip',
    path: 'folder',
  },
  {
    icon: 'mdi-credit-card-multiple',
    path: 'patch-card',
  },
  {
    icon: 'mdi-cog',
    path: '/setting',
  },
]);

const changeRoute = (path: string) => {
  if (path === '/setting') {
    router.push(path);
    return;
  }
  router.push(`/build/${selectedBuildId.value}/${path}`);
};
</script>
