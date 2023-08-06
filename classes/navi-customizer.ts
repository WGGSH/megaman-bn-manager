import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';
import { NaviCustomizerProgramInterface } from '@/classes/navi-customizer-program';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

interface NaviCustomizerInterface {
  cells: NaviCustomizerCellData[][];
  registeredNaviCustomizerPrograms: RegisteredNaviCustomizerProgram[];

  initialize(): void;
  addProgram(program: RegisteredNaviCustomizerProgram): void;
  removeProgram(registeredProgramId: number): void;
}

class NaviCustomizer implements NaviCustomizerInterface {
  public static readonly rows = 7;

  public static readonly cols = 7;

  private _registeredNaviCustomizerPrograms: RegisteredNaviCustomizerProgram[];

  public get cells(): NaviCustomizerCellData[][] {
    const result: NaviCustomizerCellData[][] = [];
    for (let i = 0; i < NaviCustomizer.rows; i += 1) {
      result[i] = [];
      for (let j = 0; j < NaviCustomizer.cols; j += 1) {
        if ([i, j].every((v) => v === 0 || v === NaviCustomizer.rows - 1)) {
          result[i][j] = {
            programId: null,
            registeredProgramId: null,
            color: 'grey-darken-4',
            isProgram: false,
          };
        } else if (i === 3) {
          result[i][j] = {
            programId: null,
            registeredProgramId: null,
            color: 'grey-lighten-1',
            isProgram: false,
          };
        } else if (i === 0 || i === NaviCustomizer.rows - 1 || j === 0 || j === NaviCustomizer.cols - 1) {
          result[i][j] = {
            programId: null,
            registeredProgramId: null,
            color: 'grey-darken-1',
            isProgram: false,
          };
        } else {
          result[i][j] = {
            programId: null,
            registeredProgramId: null,
            color: 'grey',
            isProgram: false,
          };
        }
      }
    }

    const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();
    masterNaviCustomizerProgramStore.fetchPrograms();
    const masterNaviCustomizerPrograms = masterNaviCustomizerProgramStore.programs;

    this._registeredNaviCustomizerPrograms.forEach((program) => {
      const masterNaviCustomizerProgram = masterNaviCustomizerPrograms.find(
        (masterProgram: NaviCustomizerProgramInterface) => masterProgram.id === program.programId,
      );
      const programCells = program.isCompressed ? masterNaviCustomizerProgram.compressedCells : masterNaviCustomizerProgram.cells;
      programCells.forEach((row: NaviCustomizerCellData[], i: number) => {
        row.forEach((cell: NaviCustomizerCellData, j: number) => {
          if (cell) {
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
            result[targetY + program.y][targetX + program.x] = {
              programId: program.programId,
              registeredProgramId: program.id,
              color: masterNaviCustomizerProgram.color,
              isProgram: masterNaviCustomizerProgram.isProgram,
            };
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

  public initialize(): void {
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

  public removeProgram(registeredProgramId: number): void {
    this._registeredNaviCustomizerPrograms = this._registeredNaviCustomizerPrograms.filter((program) => program.id !== registeredProgramId);
    // id を振り直す
    const results: RegisteredNaviCustomizerProgram[] = [];
    this._registeredNaviCustomizerPrograms.forEach((program, i) => {
      results.push({
        ...program,
        id: i + 1,
      });
    });
    this._registeredNaviCustomizerPrograms = results;
  }
}

export { NaviCustomizer, NaviCustomizerInterface };
