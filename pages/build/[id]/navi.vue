<template>
  <h1>navi</h1>

  <v-container>
    <draggable
      v-model="items2"
      :options="{ group: 'items' }"
      :group="{ name: 'items', pull: 'clone', put: true }"
      class="grid"
      @change="handleChange"
    >
      <template #item="{ element }">
        <v-card
          class="pa-2"
          width="100%"
          height="50"
        >
          {{ element }}
        </v-card>
      </template>
    </draggable>
  </v-container>

  <v-divider />

  <v-container>
    <draggable
      v-model="cells"
      :options="{ group: 'items' }"
      :group="{ name: 'items', pull: false, put: true }"
      class="grid"
      @change="handleChange"
    >
      <template #item="{ element }">
        <v-card
          class="pa-2"
          width="100%"
          height="50"
        >
          {{ element }}
        </v-card>
      </template>
    </draggable>
  </v-container>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { NaviCustomizer } from '~/classes/navi-customizer';

const rows = 7;
const cols = 7;

const items2 = ref(Array.from({ length: rows * cols }, (_, i) => i));

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

const handleChange = (evt) => {
  if (evt.added) {
    navi.value.add(evt.added.newIndex);
  }
};

watch(cells, (newCells) => {
  console.log('-----');
  console.log(newCells);
  console.log('-----');
});

</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.sortable-chosen {
  background-color: red;
}

.sortable-ghost {
  display: none;
  background-color: blue;
}
</style>
