<template>
  <!-- {{ programs[0].name }} -->
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="programs"
    item-value="name"
    class="elevation-1 table"
    multi-sort
    density="compact"
    show-select
    select-style="outlined"
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

const itemsPerPage = ref(20);

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
</script>
