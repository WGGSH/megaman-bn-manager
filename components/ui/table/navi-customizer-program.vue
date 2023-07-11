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
  >
    <template #item="template">
      <ui-table-row-navi-customizer-program
        :navi-customizer-program="template.item.selectable"
      />
    <!--   <ui-table-row-folder-chip -->
    <!--     :folder-chip="template.item.selectable" -->
    <!--     :regular-chip-id="regularChipId" -->
    <!--     :tag-chips-with-battle-chip-data="tagChipsWithBattleChipData" -->
    <!--     @click-remove="chipFolder.removeById(template.item.selectable.id)" -->
    <!--     @click-register-regular="onClickRegisterRegular(template.item.selectable.id)" -->
    <!--     @click-register-tag="onClickRegisterTag(template.item.selectable.id)" -->
    <!--   /> -->
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';

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
    sortable: false,
  },
  {
    title: '色',
    key: 'color',
    align: 'center',
    sortable: false,
  },
];
</script>
