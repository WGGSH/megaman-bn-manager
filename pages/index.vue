<template>
  <v-container>
    <ui-text-title>
      エグゼ6管理ツール
    </ui-text-title>
  </v-container>
</template>

<script setup lang="ts">
import { useBuildManagerStore } from '@/store/build-manager';

const buildManagerStore = useBuildManagerStore();

onMounted(() => {
  buildManagerStore.setSelectedBuildById(null);
});
</script>
