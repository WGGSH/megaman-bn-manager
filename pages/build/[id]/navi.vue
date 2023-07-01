<template>
  <h1>navi</h1>

  <v-container>
    <draggable
      v-model="items2"
      :options="{ group: 'items' }"
      :group="{ name: 'items', pull: 'clone', put: true }"
      class="grid"
      item-key="id"
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
      item-key="id"
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

  <v-container class="justify-center d-flex">
    <v-row>
      <draggable
        v-model="masterNaviCustomizerPrograms"
        :options="{ group: 'items' }"
        :group="{ name: 'items', pull: 'clone', put: true }"
        item-key="id"
        @change="handleChange"
      >
        <template #item="{ element }">
          <v-col cols="4">
            <ui-card-navi-customizer-program
              :navi-customizer-program="element"
              class="ma-0"
            />
          </v-col>
        </template>
      </draggable>
    </v-row>

    <v-row>
      <v-col
        v-for="program in masterNaviCustomizerPrograms"
        :key="program.id"
        cols="4"
      >
        <ui-card-navi-customizer-program
          :navi-customizer-program="program"
          class="ma-0"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { NaviCustomizer } from '~/classes/navi-customizer';

import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();

const masterNaviCustomizerPrograms = computed(() => masterNaviCustomizerProgramStore.programs);

const rows = 7;
const cols = 7;

const items2 = ref(Array.from({ length: rows * cols }, (_, i) => i));

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

// const programs = computed(() => masterNaviCustomizerProgramStore.programs);

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

onMounted(() => {
  if (!masterNaviCustomizerProgramStore.isFetched) {
    masterNaviCustomizerProgramStore.fetchPrograms();
  }
  console.log(masterNaviCustomizerPrograms.value);
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
