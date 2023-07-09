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
        :folder-chip="template.item.selectable"
        @on-click-chip-code="onClickChipCode"
      />
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
import { BattleChip } from '@/classes/battle-chip';

const search = ref('');

const props = defineProps({
  battleChips: {
    type: Array<BattleChip>,
    required: true,
  },
});

const itemsPerPage = ref(30);

const headers = [
  // {
  //   title: 'ID',
  //   key: 'id',
  // },
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

const emit = defineEmits(['add-battle-chip']);

watch(() => props.battleChips, () => {
});

onMounted(() => {
});

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  emit('add-battle-chip', battleChip, codeIndex);
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
