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
          :class="{ transparent: cell.color === 'transparent', 'elevation-0': cell.color === 'transparent' }"
          width="100%"
          height="100%"
          :color="cell.color"
          @mouseenter="onMouseEnter(rowIndex, cellIndex)"
          @mouseleave="onMouseLeave()"
          @click="onClick(rowIndex, cellIndex)"
        />
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
// import { NaviCustomizerProgramState } from '@/types/navi-customizer-program-state';
import { ProgramColors } from '@/value/program-colors';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';

const props = defineProps({
  cells: {
    type: Array<Array<NaviCustomizerCellData>>,
    required: true,
  },
  selectedProgram: {
    type: Object,
    required: false,
    default: null,
  },
  programState: {
    type: Object,
    required: false,
    default: null,
  },
});

const mousePosition = ref({ x: 0, y: 0 });
const overWidth = 11;

const overlayCells = computed(() => {
  // cells をコピーする
  // 11x11 の配列の真ん中 7x7 にプログラムを重ねる
  const cells: Array<Array<NaviCustomizerCellData>> = [];
  for (let y = 0; y < overWidth; y += 1) {
    cells.push([]);
    for (let x = 0; x < overWidth; x += 1) {
      cells[y].push({
        programId: null,
        registeredProgramId: null,
        color: 'transparent',
      });
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

            if (mousePosition.value.y + targetY < 0 || mousePosition.value.y + targetY >= overWidth) return;
            if (mousePosition.value.x + targetX < 0 || mousePosition.value.x + targetX >= overWidth) return;

            if (cells[mousePosition.value.y + targetY][mousePosition.value.x + targetX]) {
              cells[mousePosition.value.y + targetY][mousePosition.value.x + targetX] = {
                programId: props.selectedProgram.id,
                color: props.selectedProgram.color,
              };
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
  // 他のプログラムと重なっているかチェック
  // 枠からはみ出ているかもチェック
  const programCells = props.programState.isCompressed ? props.selectedProgram?.compressedCells : props.selectedProgram?.cells;
  if (programCells) {
    let isInclude: boolean = false;

    for (let i = 0; i < programCells.length; i += 1) {
      for (let j = 0; j < programCells[i].length; j += 1) {
        if (programCells[i][j]) {
          // 回転を考慮する
          let targetY: number;
          let targetX: number;

          switch (props.programState.rotate) {
            case 0:
              targetY = i;
              targetX = j;
              break;
            case 1:
              targetY = programCells.length - j - 1;
              targetX = i;
              break;
            case 2:
              targetY = programCells.length - i - 1;
              targetX = programCells[i].length - j - 1;
              break;
            case 3:
              targetY = j;
              targetX = programCells[i].length - i - 1;
              break;
            default:
              targetY = i;
              targetX = j;
              break;
          }
          // 画面外は禁止
          if (y + targetY < 2 || y + targetY >= overWidth - 2) {
            return;
          }
          if (x + targetX < 2 || x + targetX >= overWidth - 2) {
            return;
          }
          // 四隅も禁止
          if (
            (y + targetY === 2 && x + targetX === 2)
              || (y + targetY === 2 && x + targetX === overWidth - 3)
              || (y + targetY === overWidth - 3 && x + targetX === 2)
              || (y + targetY === overWidth - 3 && x + targetX === overWidth - 3)
          ) {
            return;
          }
          // すでにプログラムがある場合は，追加しない
          if (ProgramColors.includes(props.cells[y + targetY - 2][x + targetX - 2].color)) {
            return;
          }
          // 中央の5x5に入っている場合はフラグを建てる
          if (y + targetY >= 3 && y + targetY <= 7 && x + targetX >= 3 && x + targetX <= 7) {
            isInclude = true;
          }
        }
      }
    }

    if (!isInclude) {
      return;
    }
  }

  emit('add-program', {
    x: x - 2,
    y: y - 2,
  }, props.programState.value);
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
