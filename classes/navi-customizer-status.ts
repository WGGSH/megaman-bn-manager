import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { MegamanStatus } from '@/classes/megaman-status';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';

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

  // private getNaviCustomizerProgramAbilities(cells: NaviCustomizerCellData[][]): void {
  //   console.log(cells);
  // }

  public updateStatus(cells: NaviCustomizerCellData[][], hpMemoryNum: number): void {
    // this.getNaviCustomizerProgramAbilities(cells);
    this._megamanStatus.hpMemoryNum = hpMemoryNum;
    this._megamanStatus.apply();
  }
}
