<template>
  <h1>index</h1>
</template>

<script setup lang="ts">
import { useBuildManagerStore } from '@/store/build-manager';

const buildManagerStore = useBuildManagerStore();

onMounted(() => {
  buildManagerStore.setSelectedBuildById(null);
});
</script>
