<template>
  <v-data-table-virtual
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="chipFolderWithBattleChipData"
    item-value="name"
    height="500px"
    class="elevation-1"
  >
    <template #[`item.code`]="{ item }">
      {{ item.selectable.codes[item.selectable.codeIndex] }}
    </template>
    <template #[`item.delete`]="{ item }">
      <v-btn
        color="error"
        @click="chipFolder.removeById(item.selectable.id)"
      >
        削除
      </v-btn>
    </template>
  </v-data-table-virtual>
</template>

<script setup lang="ts">
import { useMasterBattleChipStore } from '@/store/master-battle-chip';
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { ChipFolder } from '@/classes/chip-folder';

const masterBattleChipStore = useMasterBattleChipStore();

const props = defineProps({
  chipFolder: {
    type: ChipFolder,
    required: true,
  },
});

const chipFolderWithBattleChipData = computed(() => props.chipFolder.chips.map((folderChip) => {
  const battleChip = masterBattleChipStore.findBattleChipById(folderChip.chipId);
  return {
    id: folderChip.id,
    number: battleChip.number,
    name: battleChip.name,
    class: battleChip.class,
    damage: battleChip.damage,
    type: battleChip.type,
    capacity: battleChip.capacity,
    codes: battleChip.codes,
    codeIndex: folderChip.codeIndex,
  };
}));

const itemsPerPage = ref(30);

const headers = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'number',
    key: 'number',
  },
  {
    title: 'クラス',
    key: 'class',
  },
  {
    title: 'name',
    key: 'name',
  },
  {
    title: '威力',
    key: 'damage',
  },
  {
    title: '系統',
    key: 'type',
  },
  {
    title: '容量',
    key: 'capacity',
  },
  {
    title: 'コード',
    key: 'code',
  },
  {
    title: '削除',
    key: 'delete',
  },
];

onMounted(() => {
  masterBattleChipStore.fetchBattleChips();
});

// const findBattleChipById = (id: number) => masterBattleChipStore.findBattleChipById(id);

// const emit = defineEmits(['add-battle-chip']);

// watch(() => props.battleChips, () => {
//   console.log(props.battleChips);
// });

// onMounted(() => {
//   console.log(props.battleChips);
// });

// const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
//   emit('add-battle-chip', battleChip, codeIndex);
// };
</script>
