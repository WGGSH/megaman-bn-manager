<template>
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="検索"
    single-line
    hide-details
  />
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="battleChips"
    :search="search"
    class="elevation-1 table"
    multi-sort
    show-current-page
    items-per-page-text="表示件数"
    density="compact"
  >
    <template #[`item`]="template">
      <ui-table-row-battle-chip-master
        :battle-chip="getSelectableItem(template.item.selectable)"
        :disabled-add="getDisabledAddByChip(getSelectableItem(template.item.selectable))"
        @on-click-chip-code="onClickChipCode"
      />
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
import { ChipFolderInterface } from '@/classes/chip-folder';
import { BattleChip } from '@/types/battle-chip';

const search = ref('');

const props = defineProps({
  chipFolder: {
    type: Object as PropType<ChipFolderInterface>,
    required: true,
  },
  battleChips: {
    type: Array<BattleChip>,
    required: true,
  },
});

const emit = defineEmits(['add-battle-chip']);

const itemsPerPage = ref(30);

const headers = [
  {
    title: 'ナンバー',
    key: 'number',
  },
  {
    title: 'クラス',
    key: 'class',
  },
  {
    title: 'チップ名',
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
    key: 'codes',
  },
];

const getSelectableItem = (item: any) : BattleChip => item as BattleChip;

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  emit('add-battle-chip', battleChip, codeIndex);
};

const getDisabledAddByChip = (battleChip: BattleChip) => {
  if (props.chipFolder.chips.length === 30) return true;

  const targetChipCount = props.chipFolder.chips.filter((chip) => chip.chipId === battleChip.id).length;
  const { capacity } = battleChip;
  if (capacity <= 20) return targetChipCount >= 5;
  if (capacity <= 30) return targetChipCount >= 4;
  if (capacity <= 40) return targetChipCount >= 3;
  if (capacity <= 50) return targetChipCount >= 2;
  return targetChipCount >= 1;
};

const onClickChipCode = (battleChip: BattleChip, codeIndex: number) => {
  addBattleChip(battleChip, codeIndex);
};
</script>

<style scoped lang="scss">
.table {
   ::v-deep td {
    padding: 0 !important;
  }
}
</style>
