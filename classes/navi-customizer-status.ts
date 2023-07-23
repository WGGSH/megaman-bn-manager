import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { MegamanStatus } from '@/classes/megaman-status';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';
import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';
import { AbilityBase } from '@/classes/ability/base';
import { AbilityAttackPlus } from '@/classes/ability/attack-plus';
import { AbilityStatusBugPlus } from '@/classes/ability/status-bug-plus';
import { AbilityBugStopper } from '@/classes/ability/bug-stopper';
import { AbilitySupportBug } from '@/classes/ability/support-bug';
import { AbilityRushSupport } from '@/classes/ability/rush-support';
import { AbilityTangoSupport } from '@/classes/ability/tango-support';
import { AbilityBeatSupport } from '@/classes/ability/beat-support';
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

  static addSameColorProgram(registeredProgramIdToSameColorRegisteredProgramIdsMap: Map<number, Map<number, number>>, registeredProgramId1: number, registeredProgramId2: number): Map<number, Array<number>> {
    if (!registeredProgramIdToSameColorRegisteredProgramIdsMap.has(registeredProgramId1)) {
      registeredProgramIdToSameColorRegisteredProgramIdsMap.set(registeredProgramId1, []);
    }
    if (!registeredProgramIdToSameColorRegisteredProgramIdsMap.has(registeredProgramId2)) {
      registeredProgramIdToSameColorRegisteredProgramIdsMap.set(registeredProgramId2, []);
    }
    // 同じものがなければ追加
    if (registeredProgramIdToSameColorRegisteredProgramIdsMap.get(registeredProgramId1).find((id: number) => id === registeredProgramId2) === undefined) {
      registeredProgramIdToSameColorRegisteredProgramIdsMap.get(registeredProgramId1).push(registeredProgramId2);
    }
    return registeredProgramIdToSameColorRegisteredProgramIdsMap;
  }

  private getNaviCustomizerProgramAbilities(cells: NaviCustomizerCellData[][]): AbilityBase[] {
    const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();
    const masterNaviCustomizerPrograms = masterNaviCustomizerProgramStore.programs;

    let resultAbilities: AbilityBase[] = [];
    let addAbilities: AbilityBase[] = [];
    let bugAbilities: AbilityBase[] = [];

    // コマンドライン上を調べる
    // プログラムパーツは addAbilityを
    // プラスパーツは bugAbilityを付与する
    const commandLinePrograms: RegisteredNaviCustomizerProgram[] = [];
    const commandLineBugPrograms: RegisteredNaviCustomizerProgram[] = [];
    cells[3].forEach((cell: NaviCustomizerCellData) => {
      if (cell.programId === null || cell.registeredProgramId === null) {
        return;
      }
      const masterProgram: NaviCustomizerProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === cell.programId);
      // プログラムパーツではない場合は登録しない
      if (masterProgram === undefined) {
        return;
      }
      // 既に同一のプログラムが登録されている場合は、登録しない
      if (masterProgram.isProgram) {
        if (commandLinePrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId)) {
          return;
        }
        commandLinePrograms.push(this._registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId));
      } else {
        if (commandLineBugPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId)) {
          return;
        }
        commandLineBugPrograms.push(this._registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId));
      }
    });

    // 登録されたプログラムのアビリティを追加する
    commandLinePrograms.forEach((commandLineProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === commandLineProgram.programId);
      addAbilities = addAbilities.concat(masterProgram.addAbilities);
    });

    commandLineBugPrograms.forEach((commandLineBugProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === commandLineBugProgram.programId);
      bugAbilities = bugAbilities.concat(masterProgram.bugAbilities);
    });

    // コマンドラインに乗っていないプログラムパーツを列挙する
    const notCommandLinePrograms: RegisteredNaviCustomizerProgram[] = [];
    this._registeredNaviCustomizerPrograms.forEach((registeredProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === registeredProgram.programId);
      if (masterProgram.isProgram && commandLinePrograms.find((commandLineProgram: RegisteredNaviCustomizerProgram) => commandLineProgram.id === registeredProgram.id) === undefined) {
        notCommandLinePrograms.push(registeredProgram);
      }
    });
    notCommandLinePrograms.forEach((notCommandLineProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === notCommandLineProgram.programId);
      bugAbilities = bugAbilities.concat(masterProgram.bugAbilities);
    });

    // プラスパーツすべてのプログラムのアビリティを追加する
    this._registeredNaviCustomizerPrograms.forEach((registeredProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === registeredProgram.programId);
      if (masterProgram.isProgram) {
        return;
      }
      addAbilities = addAbilities.concat(masterProgram.addAbilities);
    });

    // 配置されたプログラムの色数を見る
    const colorNum = this._registeredNaviCustomizerPrograms.map((registeredProgram: RegisteredNaviCustomizerProgram) => masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === registeredProgram.programId).color).filter((color: string, index: number, self: string[]) => self.indexOf(color) === index).length;
    // 色数が5色以上の場合はバグが付与される
    if (colorNum >= 5) {
      bugAbilities.push(new AbilityStatusBugPlus(colorNum - 4));
    }

    // 枠からはみ出ているプログラムのバグを付与する
    const outOfFramePrograms: RegisteredNaviCustomizerProgram[] = [];
    cells[0].forEach((cell: NaviCustomizerCellData) => {
      if (cell.programId === null || cell.registeredProgramId === null) {
        return;
      }
      const registeredProgram = this._registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId);
      if (outOfFramePrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId)) {
        return;
      }
      outOfFramePrograms.push(registeredProgram);
    });
    cells[6].forEach((cell: NaviCustomizerCellData) => {
      if (cell.programId === null || cell.registeredProgramId === null) {
        return;
      }
      const registeredProgram = this._registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId);
      if (outOfFramePrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cell.registeredProgramId)) {
        return;
      }
      outOfFramePrograms.push(registeredProgram);
    });

    for (let y = 1; y < 7; y++) {
      for (let x = 0; x < 7; x += 6) {
        if (cells[y][x].programId === null || cells[y][x].registeredProgramId === null) {
          continue;
        }
        const registeredProgram = this._registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cells[y][x].registeredProgramId);
        if (outOfFramePrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === cells[y][x].registeredProgramId)) {
          continue;
        }
        outOfFramePrograms.push(registeredProgram);
      }
    }

    outOfFramePrograms.forEach((registeredProgram: RegisteredNaviCustomizerProgram) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === registeredProgram.programId);
      bugAbilities = bugAbilities.concat(masterProgram.bugAbilities);
    });

    // 隣接するプログラムの色が同じ場合はバグが付与される
    // let programIdToSameColorProgramIdsMap: Map<number, Array<number>> = new Map();
    let registeredProgramIdToSameColorRegisteredProgramIdsMap: Map<number, Array<number>> = new Map();
    cells.forEach((row: NaviCustomizerCellData[], y: number) => {
      row.forEach((cell: NaviCustomizerCellData, x: number) => {
        if (cell.programId === null || cell.registeredProgramId === null) {
          return;
        }
        // 上下左右を見る
        // 上
        if (y > 0 && cells[y - 1][x].programId !== null && cells[y - 1][x].registeredProgramId !== null && cells[y - 1][x].color === cell.color && cells[y - 1][x].registeredProgramId !== cell.registeredProgramId) {
          registeredProgramIdToSameColorRegisteredProgramIdsMap = NaviCustomizerStatus.addSameColorProgram(registeredProgramIdToSameColorRegisteredProgramIdsMap, cell.registeredProgramId, cells[y - 1][x].registeredProgramId);
        }
        // 下
        if (y < 6 && cells[y + 1][x].programId !== null && cells[y + 1][x].registeredProgramId !== null && cells[y + 1][x].color === cell.color && cells[y + 1][x].registeredProgramId !== cell.registeredProgramId) {
          registeredProgramIdToSameColorRegisteredProgramIdsMap = NaviCustomizerStatus.addSameColorProgram(registeredProgramIdToSameColorRegisteredProgramIdsMap, cell.registeredProgramId, cells[y + 1][x].registeredProgramId);
        }
        // 左
        if (x > 0 && cells[y][x - 1].programId !== null && cells[y][x - 1].registeredProgramId !== null && cells[y][x - 1].color === cell.color && cells[y][x - 1].registeredProgramId !== cell.registeredProgramId) {
          registeredProgramIdToSameColorRegisteredProgramIdsMap = NaviCustomizerStatus.addSameColorProgram(registeredProgramIdToSameColorRegisteredProgramIdsMap, cell.registeredProgramId, cells[y][x - 1].registeredProgramId);
        }
        // 右
        if (x < 6 && cells[y][x + 1].programId !== null && cells[y][x + 1].registeredProgramId !== null && cells[y][x + 1].color === cell.color && cells[y][x + 1].registeredProgramId !== cell.registeredProgramId) {
          registeredProgramIdToSameColorRegisteredProgramIdsMap = NaviCustomizerStatus.addSameColorProgram(registeredProgramIdToSameColorRegisteredProgramIdsMap, cell.registeredProgramId, cells[y][x + 1].registeredProgramId);
        }
      });
    });

    // 各プログラムに隣接した同色のプログラムの数に応じたバグを付与する
    registeredProgramIdToSameColorRegisteredProgramIdsMap.forEach((sameColorRegisteredProgramIds: Array<number>, registeredProgramId: number) => {
      const masterProgram = masterNaviCustomizerPrograms.find((program: NaviCustomizerProgram) => program.id === this._registeredNaviCustomizerPrograms.find((registeredProgram: RegisteredNaviCustomizerProgram) => registeredProgram.id === registeredProgramId).programId);
      sameColorRegisteredProgramIds.forEach(() => {
        bugAbilities = bugAbilities.concat(masterProgram.bugAbilities);
      });
    });

    // バグストッパーがあればバグをすべて消す
    const hasBugStopper = addAbilities.find((ability: AbilityBase) => ability instanceof AbilityBugStopper);
    if (hasBugStopper) {
      bugAbilities = [];
    }

    // サポートバグがあれば 各種サポートを削除する
    const hasSupportBug = bugAbilities.find((ability: AbilityBase) => ability instanceof AbilitySupportBug);
    if (hasSupportBug) {
      const targetAbilities: Array<AbilityBase> = [AbilityRushSupport, AbilityBeatSupport, AbilityTangoSupport];
      addAbilities = addAbilities.filter((ability: AbilityBase) => !targetAbilities.find((targetAbility: AbilityBase) => ability instanceof targetAbility));
    }

    // アタックの特殊処理
    // ナビカスと改造カードで上限値が異なるため，ナビカスの上限を超えていれば上限値に合わせる
    const attackPluses = addAbilities.filter((ability: AbilityBase) => ability instanceof AbilityAttackPlus);
    const totalAttackPlus: number = attackPluses.reduce((total: number, attackPlus: AbilityAttackPlus) => total + attackPlus.value, 0);
    if (totalAttackPlus > 4) {
      addAbilities = addAbilities.filter((ability: AbilityBase) => !(ability instanceof AbilityAttackPlus));
      addAbilities.push(new AbilityAttackPlus(4));
    }

    resultAbilities = resultAbilities.concat(addAbilities);
    resultAbilities = resultAbilities.concat(bugAbilities);
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
