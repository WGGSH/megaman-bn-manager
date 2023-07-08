<template>
  <v-container>
    <h1>フォルダ</h1>
    <ui-button-accept @click="onClickSave">
      保存する
    </ui-button-accept>
  </v-container>

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
import { BattleChip } from '@/classes/battle-chip';
import { useBuildManagerStore } from '@/store/build-manager';

const router = useRouter();
const route = useRoute();

const buildManagerStore = useBuildManagerStore();

const masterBattleChipStore = useMasterBattleChipStore();

const masterBattleChips = computed(() => masterBattleChipStore.battleChips);

const chipFolder = ref(new ChipFolder());

const selectedBuild = computed(() => buildManagerStore.selectedBuild);

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  chipFolder.value.addBattleChip(battleChip, codeIndex);
};

watch(selectedBuild, (value) => {
  if (!value) {
    return;
  }

  chipFolder.value.chips = value.folderChips.map((chip, index) => (
    {
      id: index + 1,
      chipId: chip.chipId,
      codeIndex: chip.codeIndex,
    }
  )).filter((folderChip) => folderChip !== null);
}, { deep: true });

watch(chipFolder.value, () => {
  console.log(chipFolder.value);
});

onMounted(() => {
  masterBattleChipStore.fetchBattleChips();
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  }
});

const onClickSave = () => {
  if (!selectedBuild.value) {
    return;
  }
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    folderChips: chipFolder.value.chips,
  });
};
</script>
