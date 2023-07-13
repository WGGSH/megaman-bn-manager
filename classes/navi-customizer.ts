import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

export class NaviCustomizer {
  public static readonly rows = 7;

  public static readonly cols = 7;

  private _naviCustomizerPrograms: RegisteredNaviCustomizerProgram[];

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

    this._naviCustomizerPrograms.forEach((program) => {
      const masterNaviCustomizerProgram = masterNaviCustomizerPrograms.find(
        (masterProgram) => masterProgram.id === program.programId,
      );
      masterNaviCustomizerProgram.cells.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell) {
            if (i + program.y < 0 || i + program.y >= NaviCustomizer.rows) {
              return;
            }
            result[i + program.y][j + program.x] = masterNaviCustomizerProgram.color;
          }
        });
      });
    });

    return result;
  }

  constructor() {
    this._naviCustomizerPrograms = [];
  }

  public static indexToXY(index: number): { x: number, y: number } {
    return {
      x: index % NaviCustomizer.cols,
      y: Math.floor(index / NaviCustomizer.cols),
    };
  }

  public add(program: RegisteredNaviCustomizerProgram): void {
    this._naviCustomizerPrograms.push(program);
  }
}
