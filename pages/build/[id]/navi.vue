<template>
  <h1>navi</h1>

  <v-container>
    <!-- class="grid" -->
    <draggable
      v-model="items"
      :options="{ group: 'items' }"
      :group="{ name: 'items', pull: false, put: true }"
      @change="handleChange"
    >
      <template #item="{ element }">
        <v-card
          class="ma-8 pa-2"
        >
          {{ element }}
        </v-card>
      </template>
    </draggable>
  </v-container>

  <v-divider />

  <v-container>
    <draggable
      v-model="items2"
      :options="{ group: 'items' }"
      :group="{ name: 'items', pull: 'clone', put: true }"
      @change="handleChange"
    >
      <template #item="{ element }">
        <v-card class="ma-4 pa-2">
          {{ element }}
        </v-card>
      </template>
    </draggable>
  </v-container>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';

const rows = 2;
const cols = 2;

const items = ref(Array.from({ length: rows * cols }, (_, i) => i));

const items2 = ref(Array.from({ length: rows * cols }, (_, i) => i));

const handleChange = (evt) => {
  if (evt.added) {
    if (evt.added.newIndex !== items.value.length - 1) {
      items.value.splice(evt.added.newIndex + 1, 1);
    } else {
      items.value.splice(evt.added.newIndex, 1);
    }
  }
  // console.log(evt);
};

</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}

.sortable-chosen {
  background-color: red;
}

.sortable-ghost {
  display: none;
  background-color: blue;
}
</style>
