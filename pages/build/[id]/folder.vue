<template>
  <h1>folder</h1>

  <v-container>
    <ui-table-chip-folder
      :chip-folder="chipFolder"
    />
  </v-container>

  <v-container>
    <ui-table-battle-chip
      :battle-chips="masterBattleChips"
      @add-battle-chip="addBattleChip"
    />
  </v-container>
</template>

<script setup lang="ts">

import { useMasterBattleChipStore } from '@/store/master-battle-chip';
import { ChipFolder } from '@/classes/chip-folder';

const masterBattleChipStore = useMasterBattleChipStore();

const masterBattleChips = computed(() => masterBattleChipStore.battleChips);

const chipFolder = ref(new ChipFolder());

onMounted(() => {
  masterBattleChipStore.fetchBattleChips();
  console.log(masterBattleChips.value);
});

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  chipFolder.value.addBattleChip(battleChip, codeIndex);
};

watch(chipFolder.value, () => {
  console.log(chipFolder.value);
});

</script>
