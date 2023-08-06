<template>
  <v-container>
    <ui-text-title>
      フォルダ
    </ui-text-title>
    <ui-button-accept @click="onClickSave">
      保存する
    </ui-button-accept>
  </v-container>

  <v-container>
    <ui-table-chip-folder
      :chip-folder="chipFolder"
      :regular-chip-id="regularChipId"
      :tag-chips="tagChips"
      @click-remove="onClickRemove"
      @click-register-regular="onClickRegisterRegular"
      @click-register-tag="onClickRegisterTag"
    />
  </v-container>

  <v-container>
    <ui-text-subtitle>
      バトルチップ一覧
    </ui-text-subtitle>
    <ui-table-battle-chip-master
      :battle-chips="masterBattleChips"
      :chip-folder="chipFolder"
      @add-battle-chip="addBattleChip"
    />
  </v-container>
</template>

<script setup lang="ts">
import { BattleChip } from '@/classes/battle-chip';
import { ChipFolder, ChipFolderInterface } from '@/classes/chip-folder';
import { Build } from '@/types/build';
import { FolderChip } from '@/types/folder-chip';
import { useBuildManagerStore } from '@/store/build-manager';
import { useMasterBattleChipStore } from '@/store/master-battle-chip';

const router = useRouter();
const route = useRoute();

const buildManagerStore = useBuildManagerStore();
const selectedBuild = computed(() : Build => buildManagerStore.selectedBuild);

const masterBattleChipStore = useMasterBattleChipStore();
const masterBattleChips = computed(() => masterBattleChipStore.battleChips);

const chipFolder = ref<ChipFolderInterface>(new ChipFolder());
const regularChipId = ref(0);
const tagChipIds = ref<number[]>([]);

const tagChips = computed(() => tagChipIds.value.map((tagChipId) => {
  const folderChips = chipFolder.value.chips.find((chip) => chip.id === tagChipId) as FolderChip;
  return folderChips;
}));

const loadFolder = () => {
  if (!selectedBuild.value) {
    return;
  }

  chipFolder.value.chips = selectedBuild.value.folderChips.map((chip, index) => (
    {
      id: index + 1,
      chipId: chip.chipId,
      codeIndex: chip.codeIndex,
    }
  )).filter((folderChip) => folderChip !== null);

  if (selectedBuild.value.regularChipId) {
    regularChipId.value = selectedBuild.value.regularChipId;
  }
  if (selectedBuild.value.tagChipIds) {
    tagChipIds.value = selectedBuild.value.tagChipIds;
  }
};

watch(selectedBuild, (value) => {
  if (!value) {
    return;
  }
  loadFolder();
}, { deep: true });

onMounted(() => {
  masterBattleChipStore.fetchBattleChips();
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  }

  loadFolder();
});

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  chipFolder.value.addBattleChip(battleChip, codeIndex);
};

const onClickSave = () => {
  if (!selectedBuild.value) {
    return;
  }
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    folderChips: chipFolder.value.chips,
    regularChipId: regularChipId.value,
    tagChipIds: tagChipIds.value,
  });
};

const onClickRemove = (id: number) => {
  chipFolder.value.removeById(id);
};

const onClickRegisterRegular = (id: number) => {
  if (regularChipId.value === id) {
    regularChipId.value = 0;
    return;
  }
  regularChipId.value = id;
};

const onClickRegisterTag = (id: number) => {
  if (tagChipIds.value.includes(id)) {
    tagChipIds.value = tagChipIds.value.filter((tagChipId) => tagChipId !== id);
    return;
  }
  tagChipIds.value.push(id);
};
</script>
