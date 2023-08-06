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
          :class="getCellClass({ y: rowIndex, x: cellIndex })"
          width="100%"
          height="100%"
          :color="cell.color"
          @mouseenter="onMouseEnter({ y: rowIndex, x: cellIndex })"
          @mouseleave="onMouseLeave()"
          @click="onClick({ y: rowIndex, x: cellIndex })"
        >
          <v-icon
            v-if="cell.programId && !cell.isProgram"
            color="grey-darken-3"
            class="plus-part"
          >
            mdi-plus
          </v-icon>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ProgramColors } from '@/value/program-colors';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';
import { NaviCustomizerProgramInterface } from '@/classes/navi-customizer-program';
import { NaviCustomizerProgramState } from '@/types/navi-customizer-program-state';
import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';
import { Position } from '@/types/position';

const props = defineProps({
  cells: {
    type: Array<Array<NaviCustomizerCellData>>,
    required: true,
  },
  selectedProgram: {
    type: Object as PropType<NaviCustomizerProgramInterface | null>,
    required: false,
    default: null,
  },
  programState: {
    type: Object as PropType<NaviCustomizerProgramState>,
    required: false,
    default: null,
  },
});

const mousePosition = ref<Position | null>(null);
const overWidth = 11;

const overlayCells = computed(() : NaviCustomizerCellData[][] => {
  // cells をコピーする
  // 11x11 の配列の真ん中 7x7 にプログラムを重ねる
  const cells: NaviCustomizerCellData[][] = [];
  for (let y = 0; y < overWidth; y += 1) {
    cells.push([]);
    for (let x = 0; x < overWidth; x += 1) {
      cells[y].push({
        programId: null,
        registeredProgramId: null,
        color: 'transparent',
        isProgram: false,
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
  if (mousePosition.value !== null && props.selectedProgram) {
    const programCells = props.programState.isCompressed ? props.selectedProgram?.compressedCells : props.selectedProgram?.cells;
    if (programCells) {
      const mousePositionY = mousePosition.value.y;
      const mousePositionX = mousePosition.value.x;
      programCells.forEach((row: Array<boolean>, y: number) => {
        row.forEach((cell: boolean, x: number) => {
          if (mousePositionY + y < 0 || mousePositionY + y >= overWidth) return;
          if (mousePositionX + x < 0 || mousePositionX + x >= overWidth) return;
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

            if (mousePositionY + targetY < 0 || mousePositionY + targetY >= overWidth) return;
            if (mousePositionX + targetX < 0 || mousePositionX + targetX >= overWidth) return;

            if (cells[mousePositionY + targetY][mousePositionX + targetX]) {
              cells[mousePositionY + targetY][mousePositionX + targetX] = {
                programId: props.selectedProgram?.id as number,
                color: props.selectedProgram?.color as NaviCustomizerProgramColor,
                isProgram: props.selectedProgram?.isProgram as boolean,
              };
            }
          }
        });
      });
    }
  }
  return cells;
});

const onMouseEnter = (position: Position) : void => {
  mousePosition.value = position;
};

const onMouseLeave = () : void => {
  mousePosition.value = null;
};

const emit = defineEmits(['add-program', 'remove-program']);

const addProgram = (position: Position) : void => {
  const { y, x } = position;
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
  }, props.programState);
};

const removeProgram = (position: Position) : void => {
  const { y, x } = position;
  // クリックしたマスにプログラムがある場合は削除する
  const { targetY, targetX } = {
    targetY: y - 2,
    targetX: x - 2,
  };
  if (targetY < 0 || targetY >= overWidth - 4) return;
  if (targetX < 0 || targetX >= overWidth - 4) return;
  const { registeredProgramId } = props.cells[targetY][targetX];
  if (registeredProgramId) {
    emit('remove-program', registeredProgramId, null);
  }
};

const onClick = (position: Position) : void => {
  if (props.selectedProgram) {
    addProgram(position);
  } else {
    removeProgram(position);
  }
};

const getCellClass = (position: Position) : Object => {
  const { y, x } = position;
  // let [hasBorderTop, hasBorderBottom, hasBorderRight, hasBorderLeft] = [false, false, false, false];
  let [hasBorderTop, hasBorderBottom, hasBorderRight, hasBorderLeft] = [true, true, true, true];

  const cell = overlayCells.value[y][x];
  // 上
  if (y > 0) {
    if (overlayCells.value[y - 1][x].registeredProgramId === cell.registeredProgramId) {
      hasBorderTop = false;
    }
  }
  // 下
  if (y < overWidth - 1) {
    if (overlayCells.value[y + 1][x].registeredProgramId === cell.registeredProgramId) {
      hasBorderBottom = false;
    }
  }
  // 右
  if (x < overWidth - 1) {
    if (overlayCells.value[y][x + 1].registeredProgramId === cell.registeredProgramId) {
      hasBorderRight = false;
    }
  }
  // 左
  if (x > 0) {
    if (overlayCells.value[y][x - 1].registeredProgramId === cell.registeredProgramId) {
      hasBorderLeft = false;
    }
  }
  return {
    transparent: overlayCells.value[y][x].color === 'transparent',
    'elevation-0': overlayCells.value[y][x].color === 'transparent',
    'has-border-top': hasBorderTop,
    'has-border-bottom': hasBorderBottom,
    'has-border-right': hasBorderRight,
    'has-border-left': hasBorderLeft,
  };
};
</script>

<style scoped lang="scss">

.grid {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  .cell {
    margin: -2px;
    border: 2px solid transparent;

    &.has-border-top {
      margin-top: -2px;
      border-top: 2px solid #001;
    }

    &.has-border-bottom {
      margin-bottom: -2px;
      border-bottom: 2px solid #000;
    }

    &.has-border-left {
      margin-left: -2px;
      border-left: 2px solid #000;
    }

    &.has-border-right {
      margin-right: -2px;
      border-right: 2px solid #000;
    }

    &.transparent {
      margin: -2px;
      border: 2px solid transparent;
    }

    .plus-part {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      font-size: 70px;
      opacity: 20%;
    }
  }
}

</style>
