import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { MegamanStatus } from '@/classes/megaman-status';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';
import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';
import { AbilityBase } from '@/classes/ability/base';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

export class NaviCustomizerStatus {
  private _registeredNaviCustomizerPrograms: RegisteredNaviCustomizerProgram[];

  private _megamanStatus: MegamanStatus;

  public get registeredNaviCustomizerPrograms(): RegisteredNaviCustomizerProgram[] {
    return this._registeredNaviCustomizerPrograms;
  }

  public set registeredNaviCustomizerPrograms(value: RegisteredNaviCustomizerProgram[]) {
    this._registeredNaviCustomizerPrograms = value;
  }

  public get megamanStatus(): MegamanStatus {
    return this._megamanStatus;
  }

  constructor() {
    this._registeredNaviCustomizerPrograms = [];
    this._megamanStatus = new MegamanStatus();
  }

  private getNaviCustomizerProgramAbilities(cells: NaviCustomizerCellData[][]): AbilityBase[] {
    const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();
    const masterNaviCustomizerPrograms = masterNaviCustomizerProgramStore.programs;

    // コマンドライン上のプログラムパーツを取得
    const commandLinePrograms: RegisteredNaviCustomizerProgram[] = [];
    cells[3].forEach((cell: NaviCustomizerCellData) => {
      if (cell.programId === null || cell.registeredProgramId === null) {
        return;
      }
      const masterProgram: NaviCustomizerProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === cell.programId);
      // プログラムパーツではない場合は登録しない
      if (masterProgram === undefined || !masterProgram.isProgram) {
        return;
      }
      // 既に同一のプログラムが登録されている場合は、登録しない
      if (commandLinePrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId)) {
        return;
      }
      commandLinePrograms.push(this._registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId));
    });

    // 登録されたプログラムのアビリティを追加する
    let resultAbilities: AbilityBase[] = [];
    commandLinePrograms.forEach((commandLineProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === commandLineProgram.programId);
      resultAbilities = resultAbilities.concat(masterProgram.addAbilities);
    });

    // プラスパーツではないすべてのプログラムのアビリティを追加する
    this._registeredNaviCustomizerPrograms.forEach((registeredProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === registeredProgram.programId);
      if (masterProgram.isProgram) {
        return;
      }
      resultAbilities = resultAbilities.concat(masterProgram.addAbilities);
    });

    return resultAbilities;
  }

  public updateStatus(registeredNaviCustomizerPrograms: RegisteredNaviCustomizerProgram[], cells: NaviCustomizerCellData[][], hpMemoryNum: number): void {
    this._registeredNaviCustomizerPrograms = registeredNaviCustomizerPrograms;
    const abilities: AbilityBase[] = this.getNaviCustomizerProgramAbilities(cells);
    this._megamanStatus.hpMemoryNum = hpMemoryNum;
    this._megamanStatus.abilities = abilities;
    this._megamanStatus.apply();
  }
}
