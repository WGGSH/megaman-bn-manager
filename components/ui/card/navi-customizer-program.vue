<template>
  <v-card class="container">
    <v-container>
      <v-row class="buttons">
        <v-switch
          v-model="isCompressed"
          label="圧縮"
        />
      </v-row>
      <v-row>
        <v-btn>
          <v-icon>
            mdi-rotate-left-variant
          </v-icon>
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-rotate-right-variant
          </v-icon>
        </v-btn>
      </v-row>
      <v-row
        v-for="(row, indexRow) in displayCells"
        :key="indexRow"
        class="grid"
      >
        <v-col
          v-for="(cell, indexCell) in row"
          :key="indexCell"
          class="pa-0 cell"
        >
          <v-card
            v-if="cell"
            :color="naviCustomizerProgram.color"
            class="pa-4 fill rounded-4"
            border
          />
          <v-card
            v-else
            class="pa-0 ma-4 empty elevation-0 rounded-0"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card-text class="mb-4">
      {{ naviCustomizerProgram.name }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';

const props = defineProps({
  naviCustomizerProgram: {
    type: Object as PropType<NaviCustomizerProgram>,
    required: true,
  },
});

// const rotate = ref(0);

onMounted(() => {
  console.log(props.naviCustomizerProgram);
});

const isCompressed = ref(true);
const widthCell = computed(() => props.naviCustomizerProgram.cells[0].length);

const displayCells = computed(() => {
  if (isCompressed.value) {
    return props.naviCustomizerProgram.compressedCells;
  }
  return props.naviCustomizerProgram.cells;
});

</script>

<style scoped lang="scss">

.container {
  width: 100%;
  // width: calc(40px * v-bind(widthCell));
  // max-width: 200px;
  // height: 100%;
}

.grid {
  // width: 100%;
  width: calc(40px * v-bind(widthCell));
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
}

.cell {
  .fill {
  }
}
</style>
