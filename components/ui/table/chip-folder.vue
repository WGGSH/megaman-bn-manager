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
        :folder-chip-with-battle-chip-data="getSelectableItem(template.item.selectable)"
        :regular-chip-id="regularChipId"
        :tag-chips-with-battle-chip-data="tagChipsWithBattleChipData"
        :read-only="readOnly"
        @click-remove="onClickRemove(getSelectableItem(template.item.selectable).id)"
        @click-register-regular="onClickRegisterRegular(getSelectableItem(template.item.selectable).id)"
        @click-register-tag="onClickRegisterTag(getSelectableItem(template.item.selectable).id)"
      />
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
import { ChipFolderInterface } from '@/classes/chip-folder';
import { FolderChip } from '@/types/folder-chip';
import { FolderChipWithBattleChipData } from '@/types/folder-chip-with-battle-chip-data';
import { useMasterBattleChipStore } from '@/store/master-battle-chip';

const masterBattleChipStore = useMasterBattleChipStore();

const props = defineProps({
  chipFolder: {
    type: Object as PropType<ChipFolderInterface>,
    required: true,
  },
  regularChipId: {
    type: Number,
    required: true,
  },
  tagChips: {
    type: Array as PropType<FolderChip[]>,
    required: true,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click-remove', 'click-register-regular', 'click-register-tag']);

onMounted(() => {
  masterBattleChipStore.fetchBattleChips();
});

const chipFolderWithBattleChipData = computed(() :FolderChipWithBattleChipData[] => props.chipFolder.chips.map((folderChip) :FolderChipWithBattleChipData => {
  const battleChip = masterBattleChipStore.findBattleChipById(String(folderChip.chipId));
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

const tagChipsWithBattleChipData = computed(() :FolderChipWithBattleChipData[] => props.tagChips.map((folderChip) :FolderChipWithBattleChipData => {
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

const getSelectableItem = (item: any) : FolderChipWithBattleChipData => item as FolderChipWithBattleChipData;

const onClickRemove = (folderChipId: number) => {
  emit('click-remove', folderChipId);
};

const onClickRegisterRegular = (folderChipId: number) => {
  emit('click-register-regular', folderChipId);
};

const onClickRegisterTag = (folderChipId: number) => {
  emit('click-register-tag', folderChipId);
};

</script>

<style scoped lang="scss">
.table {
   ::v-deep(td) {
    padding: 0 !important;
  }
}
</style>
