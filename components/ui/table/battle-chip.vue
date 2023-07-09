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
    <template #[`item.number`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ template.item.selectable.number }}
      </ui-card-table-data>
    </template>
    <template #[`item.class`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ ChipText.chipClassToTextMap[template.item.selectable.class] }}
      </ui-card-table-data>
    </template>
    <template #[`item.name`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ template.item.selectable.name }}
      </ui-card-table-data>
    </template>
    <template #[`item.damage`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ template.item.selectable.damage }}
      </ui-card-table-data>
    </template>
    <template #[`item.type`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ ChipText.chipTypeToTextMap[template.item.selectable.type] }}
      </ui-card-table-data>
    </template>
    <template #[`item.capacity`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ template.item.selectable.capacity }}
      </ui-card-table-data>
    </template>
    <template #[`item.codes`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        <span
          v-for="(code, index) in template.item.selectable.codes"
          :key="index"
        >
          <v-btn
            text
            small
            height="100%"
            :disabled="code === ''"
            @click="addBattleChip(template.item.selectable, index)"
          >
            <span v-if="code === ''">-</span>
            <span v-else>{{ code }}</span>
          </v-btn>
        </span>
      </ui-card-table-data>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
import { BattleChip } from '@/classes/battle-chip';
import { ChipText } from '@/value/chip-text';
import { ChipColor } from '@/value/chip-color';

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
  console.log(props.battleChips);
});

onMounted(() => {
});

const getChipColor = (battleChip: BattleChip) => ChipColor.chipClassToTextMap[battleChip.class];

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  emit('add-battle-chip', battleChip, codeIndex);
};
</script>

<style scoped lang="scss">
.table {
   ::v-deep td {
    padding: 0 !important;
  }
}
</style>
