<template>
  <v-data-table
    v-model="selectedPrograms"
    :items-per-page="itemsPerPage"
    :headers="headers"
    :items="programs"
    item-value="name"
    class="elevation-1"
    multi-sort
    density="compact"
    show-select
    return-object
    select-strategy="single"
  >
    <template #[`item.isProgram`]="template">
      <v-icon v-if="template.item.selectable.isProgram">
        mdi-check
      </v-icon>
    </template>
    <template #[`item.color`]="template">
      {{ ColorText.colorToTextMap[template.item.selectable.color] }}
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
import { ColorText } from '@/value/color-text';

defineProps({
  programs: {
    type: Array,
    required: true,
  },
});

const itemsPerPage = ref(10);
const selectedPrograms = ref([]);

const headers = [
  {
    title: '名前',
    key: 'name',
    align: 'center',
    sortable: true,
  },
  {
    title: 'プログラムパーツ',
    key: 'isProgram',
    align: 'center',
    sortable: true,
  },
  {
    title: '色',
    key: 'color',
    align: 'center',
    sortable: true,
  },
];

const emit = defineEmits(['update-selected-program']);

watch(selectedPrograms, (newValue) => {
  if (newValue.length === 0) {
    emit('update-selected-program', null);
  } else {
    emit('update-selected-program', newValue[0]);
  }
});
</script>
