<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="readOnly ? readOnlyHeaders : headers"
    :items="chipFolderWithBattleChipData"
    item-value="name"
    class="elevation-1 table"
    multi-sort
    density="compact"
  >
    <template #item="template">
      <ui-table-row-folder-chip
        :folder-chip="template.item.selectable"
        :regular-chip-id="regularChipId"
        :tag-chips-with-battle-chip-data="tagChipsWithBattleChipData"
        :read-only="readOnly"
        @click-remove="chipFolder.removeById(template.item.selectable.id)"
        @click-register-regular="onClickRegisterRegular(template.item.selectable.id)"
        @click-register-tag="onClickRegisterTag(template.item.selectable.id)"
      />
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { useMasterBattleChipStore } from '@/store/master-battle-chip';
import { VDataTable } from 'vuetify/labs/VDataTable';
import { ChipFolder } from '@/classes/chip-folder';

const masterBattleChipStore = useMasterBattleChipStore();

const props = defineProps({
  chipFolder: {
    type: ChipFolder,
    required: true,
  },
  regularChipId: {
    type: Number,
    required: true,
  },
  tagChips: {
    type: Array<Object>,
    required: true,
  },
  readOnly: {
    type: Boolean,
    default: false,
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
    code: battleChip.codes[folderChip.codeIndex],
    codeIndex: folderChip.codeIndex,
  };
}));

const tagChipsWithBattleChipData = computed(() => props.tagChips.map((folderChip) => {
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
    code: battleChip.codes[folderChip.codeIndex],
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
    title: 'No',
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
    title: 'REG/TAG',
    key: 'reg-tag',
  },
  {
    title: '削除',
    key: 'delete',
  },
];

const readOnlyHeaders = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'No',
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
];

onMounted(() => {
  masterBattleChipStore.fetchBattleChips();
});

const emit = defineEmits(['click-register-regular', 'click-register-tag']);

const onClickRegisterRegular = (folderChipId: number) => {
  emit('click-register-regular', folderChipId);
};

const onClickRegisterTag = (folderChipId: number) => {
  emit('click-register-tag', folderChipId);
};

</script>

<style scoped lang="scss">
.table {
   ::v-deep td {
    padding: 0 !important;
  }
}
</style>
