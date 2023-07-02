<template>
  <h1>folder</h1>

  <v-container>
    <ui-card-battle-chip :battle-chips="masterBattleChips" />
  </v-container>
</template>

<script setup lang="ts">

import { useMasterBattleChipStore } from '@/store/master-battle-chip';

const masterBattleChipStore = useMasterBattleChipStore();

const masterBattleChips = computed(() => masterBattleChipStore.battleChips);

onMounted(() => {
  if (!masterBattleChipStore.isFetched) {
    masterBattleChipStore.fetchBattleChips();
  }
  console.log(masterBattleChips.value);
});

</script>
