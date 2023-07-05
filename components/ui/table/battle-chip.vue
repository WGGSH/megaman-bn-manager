<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="battleChips"
    item-value="name"
    class="elevation-1"
  >
    <template #[`item.class`]="template">
      {{ ChipText.chipClassToTextMap[template.item.selectable.class] }}
    </template>
    <template #[`item.type`]="template">
      {{ ChipText.chipTypeToTextMap[template.item.selectable.type] }}
    </template>
    <template #[`item.codes`]="template">
      <span
        v-for="(code, index) in template.item.selectable.codes"
        :key="index"
      >
        <v-btn
          text
          small
          :disabled="code === ''"
          @click="addBattleChip(template.item.selectable, index)"
        >
          {{ code }}
        </v-btn>
      </span>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
import { BattleChip } from '@/classes/battle-chip';
import { ChipText } from '@/value/chip-text';

const props = defineProps({
  battleChips: {
    type: Array<BattleChip>,
    required: true,
  },
});

const itemsPerPage = ref(10);

const headers = [
  // {
  //   title: 'ID',
  //   key: 'id',
  // },
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
    key: 'codes',
  },
];

const emit = defineEmits(['add-battle-chip']);

watch(() => props.battleChips, () => {
  console.log(props.battleChips);
});

onMounted(() => {
  console.log(props.battleChips);
});

const addBattleChip = (battleChip: BattleChip, codeIndex: number) => {
  emit('add-battle-chip', battleChip, codeIndex);
};
</script>
