<template>
  <v-data-table-virtual
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="chipFolderWithBattleChipData"
    item-value="name"
    height="500px"
    class="elevation-1 table"
    multi-sort
    density="compact"
  >
    <template #[`item.id`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ template.item.selectable.id }}
      </ui-card-table-data>
    </template>
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
    <template #[`item.code`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        {{ template.item.selectable.codes[template.item.selectable.codeIndex] }}
      </ui-card-table-data>
    </template>
    <template #[`item.delete`]="template">
      <ui-card-table-data :color="getChipColor(template.item.selectable)">
        <v-btn
          color="error"
          height="100%"
          @click="chipFolder.removeById(template.item.selectable.id)"
        >
          削除
        </v-btn>
      </ui-card-table-data>
    </template>
  </v-data-table-virtual>
</template>

<script setup lang="ts">
import { useMasterBattleChipStore } from '@/store/master-battle-chip';
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { ChipFolder } from '@/classes/chip-folder';
import { ChipText } from '@/value/chip-text';
import { ChipColor } from '@/value/chip-color';

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

const getChipColor = (battleChip: BattleChip) => ChipColor.chipClassToTextMap[battleChip.class];
</script>

<style scoped lang="scss">
.table {
   ::v-deep td {
    padding: 0 !important;
  }
}
</style>
