import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';

export class NaviCustomizer {
  public static readonly rows = 7;

  public static readonly cols = 7;

  private _naviCustomizerPrograms: NaviCustomizerProgram[];

  public get cells(): number[] {
    const result: number[][] = [];
    for (let i = 0; i < NaviCustomizer.rows; i += 1) {
      result[i] = [];
      for (let j = 0; j < NaviCustomizer.cols; j += 1) {
        result[i][j] = 0;
      }
    }

    this._naviCustomizerPrograms.forEach((program) => {
      program.cells.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell) {
            if (i + program.y < 0 || i + program.y >= NaviCustomizer.rows) {
              return;
            }
            result[i + program.y][j + program.x] = 1;
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

  public add(index: number): void {
    const { x, y } = NaviCustomizer.indexToXY(index);
    this._naviCustomizerPrograms.push(new NaviCustomizerProgram(x, y));
  }
}
