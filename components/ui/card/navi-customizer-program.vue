<template>
  <v-card class="container pa-2" width="100%" height="100%">
    <v-card-title>
      {{ naviCustomizerProgram.name }}
    </v-card-title>
    <v-container>
      <v-row>
        <v-switch
          v-model="isCompressed"
          label="圧縮"
        />
      </v-row>
      <v-row class="mb-4">
        <v-col>
          <v-btn @click="onClickRotateRight">
            <v-icon>
              mdi-rotate-left
            </v-icon>
          </v-btn>
        </v-col>
        <v-col align="right">
          <v-btn @click="onClickRotateLeft">
            <v-icon>
              mdi-rotate-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div
        v-for="(row, rowIndex) in displayCells"
        :key="rowIndex"
        class="row"
      >
        <div
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="col"
        >
          <v-card
            class="pa-5 elevation-0 rounded-0 cell"
            :class="{ filled: cell }"
            width="100%"
            height="100%"
            :color="cell ? naviCustomizerProgram.color : 'transparent'"
          />
        </div>
      </div>
    </v-container>
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

const rotate = ref(0);

onMounted(() => {
});

const displayCellsWidth = ref(5);

const isCompressed = ref(true);
const cellWidth = computed(() => Math.max(props.naviCustomizerProgram.cells.length, props.naviCustomizerProgram.cells[0].length));

const displayCells = computed(() => {
  let offset = 0;
  switch (cellWidth.value) {
    case 1:
    case 2:
      offset = 2;
      break;
    case 3:
    case 4:
      offset = 1;
      break;
    case 5:
      offset = 0;
      break;
    default:
      offset = 0;
      break;
  }

  const cells: Array<Array<Boolean>> = [];
  for (let i = 0; i < displayCellsWidth.value; i++) {
    const row: Array<Boolean> = [];
    for (let j = 0; j < displayCellsWidth.value; j++) {
      row.push(false);
    }
    cells.push(row);
  }

  for (let i = 0; i < props.naviCustomizerProgram.cells.length; i++) {
    for (let j = 0; j < props.naviCustomizerProgram.cells[i].length; j++) {
      let y:number;
      let x: number;

      switch (rotate.value) {
        case 0:
          y = i;
          x = j;
          break;
        case 1:
          y = j;
          x = props.naviCustomizerProgram.cells[i].length - i - 1;
          break;
        case 2:
          y = props.naviCustomizerProgram.cells[i].length - i - 1;
          x = props.naviCustomizerProgram.cells[i].length - j - 1;
          break;
        case 3:
          y = props.naviCustomizerProgram.cells[i].length - j - 1;
          x = i;
          break;
        default:
          y = i;
          x = j;
          break;
      }

      cells[i + offset][j + offset] = isCompressed.value
        ? props.naviCustomizerProgram.compressedCells[y][x]
        : props.naviCustomizerProgram.cells[y][x];
    }
  }
  return cells;
});

const onClickRotateRight = () => {
  rotate.value = (rotate.value + 1) % 4;
};

const onClickRotateLeft = () => {
  rotate.value = (rotate.value + 3) % 4;
};

</script>

<style scoped lang="scss">

.row {
  display: flex;
  justify-content: center;
  align-items: center;

  .col {
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    .cell {
      border: 1px solid rgba(0,0,0,0.05);

      &.filled {
        border: 1px solid black;
      }
    }
  }
}
</style>
