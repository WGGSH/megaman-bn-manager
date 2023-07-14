import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

export class NaviCustomizer {
  public static readonly rows = 7;

  public static readonly cols = 7;

  private _registeredNaviCustomizerPrograms: RegisteredNaviCustomizerProgram[];

  public get cells(): NaviCustomizerProgramColor[][] {
    const result: NaviCustomizerProgramColor[][] = [];
    for (let i = 0; i < NaviCustomizer.rows; i += 1) {
      result[i] = [];
      for (let j = 0; j < NaviCustomizer.cols; j += 1) {
        if ([i, j].every((v) => v === 0 || v === NaviCustomizer.rows - 1)) {
          result[i][j] = 'grey-darken-4';
        } else if (i === 3) {
          result[i][j] = 'grey-lighten-1';
        } else if (i === 0 || i === NaviCustomizer.rows - 1 || j === 0 || j === NaviCustomizer.cols - 1) {
          result[i][j] = 'grey-darken-1';
        } else {
          result[i][j] = 'grey';
        }
      }
    }

    const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();
    const masterNaviCustomizerPrograms = masterNaviCustomizerProgramStore.programs;

    this._registeredNaviCustomizerPrograms.forEach((program) => {
      const masterNaviCustomizerProgram = masterNaviCustomizerPrograms.find(
        (masterProgram) => masterProgram.id === program.programId,
      );
      const programCells = program.isCompressed ? masterNaviCustomizerProgram.compressedCells : masterNaviCustomizerProgram.cells;
      programCells.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell) {
            if (i + program.y < 0 || i + program.y >= NaviCustomizer.rows) {
              return;
            }
            // 回転を考慮する
            let targetY: number;
            let targetX: number;

            switch (program.rotate) {
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
            result[targetY + program.y][targetX + program.x] = masterNaviCustomizerProgram.color;
          }
        });
      });
    });

    return result;
  }

  public get registeredNaviCustomizerPrograms(): RegisteredNaviCustomizerProgram[] {
    return this._registeredNaviCustomizerPrograms;
  }

  constructor() {
    this._registeredNaviCustomizerPrograms = [];
  }

  public static indexToXY(index: number): { x: number, y: number } {
    return {
      x: index % NaviCustomizer.cols,
      y: Math.floor(index / NaviCustomizer.cols),
    };
  }

  public addProgram(program: RegisteredNaviCustomizerProgram): void {
    this._registeredNaviCustomizerPrograms.push(program);
  }
}
