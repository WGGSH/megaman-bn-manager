<template>
  <v-card
    class="pa-8"
  >
    <div
      v-for="(row, rowIndex) in overlayCells"
      :key="rowIndex"
      class="grid"
    >
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
      >
        <v-card
          class="pa-5 elevation-1 rounded-0 cell"
          :class="{ transparent: cell === 'transparent', 'elevation-0': cell === 'transparent' }"
          width="100%"
          height="100%"
          :color="cell"
          @mouseenter="onMouseEnter(rowIndex, cellIndex)"
          @mouseleave="onMouseLeave()"
          @click="onClick(rowIndex, cellIndex)"
        />
      </div>
    </div>
    {{ selectedProgram }}
    {{ programState }}
  </v-card>
</template>

<script setup lang="ts">
import { NaviCustomizerProgramState } from '@/types/navi-customizer-program-state';

const props = defineProps({
  cells: {
    type: Array as PropType<string[][]>,
    required: true,
  },
  selectedProgram: {
    type: Object as PropType<object | null>,
    required: true,
  },
  programState: {
    type: Object as PropType<NaviCustomizerProgramState>,
    required: true,
  },
});

const mousePosition = ref({ x: 0, y: 0 });
const overWidth = 11;

const overlayCells = computed(() => {
  // cells をコピーする
  // 11x11 の配列の真ん中 7x7 にプログラムを重ねる
  const cells = [];
  for (let y = 0; y < overWidth; y += 1) {
    cells.push([]);
    for (let x = 0; x < overWidth; x += 1) {
      cells[y].push('transparent');
    }
  }

  for (let y = 0; y < props.cells.length; y += 1) {
    for (let x = 0; x < props.cells[y].length; x += 1) {
      cells[y + 2][x + 2] = props.cells[y][x];
    }
  }

  // cells の上に，選択中のプログラムを重ねる
  // mousePosition が null でなければ，そこにプログラムを重ねる
  if (mousePosition.value.x !== null && mousePosition.value.y !== null) {
    const programCells = props.programState.isCompressed ? props.selectedProgram?.compressedCells : props.selectedProgram?.cells;
    if (programCells) {
      programCells.forEach((row: Array<boolean>, y: number) => {
        row.forEach((cell: boolean, x: number) => {
          if (mousePosition.value.y + y < 0 || mousePosition.value.y + y >= overWidth) return;
          if (mousePosition.value.x + x < 0 || mousePosition.value.x + x >= overWidth) return;
          if (cell) {
            // 回転を考慮する
            let targetY: number;
            let targetX: number;

            switch (props.programState.rotate) {
              case 0:
                targetY = y;
                targetX = x;
                break;
              case 1:
                targetY = programCells.length - x - 1;
                targetX = y;
                break;
              case 2:
                targetY = programCells.length - y - 1;
                targetX = programCells[y].length - x - 1;
                break;
              case 3:
                targetY = x;
                targetX = programCells[y].length - y - 1;
                break;
              default:
                targetY = y;
                targetX = x;
                break;
            }

            if (cells[mousePosition.value.y + targetY][mousePosition.value.x + targetX]) {
              cells[mousePosition.value.y + targetY][mousePosition.value.x + targetX] = props.selectedProgram.color;
            }
          }
        });
      });
    }
  }
  return cells;
});

const onMouseEnter = (y, x) => {
  mousePosition.value = { x, y };
};

const onMouseLeave = () => {
  mousePosition.value = { x: null, y: null };
};

const emit = defineEmits(['add-program']);

const onClick = (y, x) => {
  emit('add-program', {
    x: x - 2,
    y: y - 2,
  }, props.programState.value);
  // if (props.selectedProgram) {
  //   props.programState.setProgramPosition({ x, y });
  // }
};
</script>

<style scoped lang="scss">

.grid {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  .cell {
    border: 1px solid #000;

    &.transparent {
      border: 1px solid transparent;
    }
  }
}

</style>
