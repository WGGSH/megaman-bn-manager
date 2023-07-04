import { Program } from '@/types/program';
import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

export class NaviCustomizer {
  public static readonly rows = 7;

  public static readonly cols = 7;

  private _naviCustomizerPrograms: Program[];

  public get cells(): NaviCustomizerProgramColor[] {
    const result: NaviCustomizerProgramColor[][] = [];
    for (let i = 0; i < NaviCustomizer.rows; i += 1) {
      result[i] = [];
      for (let j = 0; j < NaviCustomizer.cols; j += 1) {
        result[i][j] = 'none';
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

    return result.reduce((acc, val) => acc.concat(val), []);
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

  public add(programId: number, index: number): void {
    const { x, y } = NaviCustomizer.indexToXY(index);
    this._naviCustomizerPrograms.push({ programId, x, y });
  }
}
