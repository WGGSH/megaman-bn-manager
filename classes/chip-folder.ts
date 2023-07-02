import { BattleChip } from '@/classes/battle-chip';
import { Chip } from '@/types/chip';

export class ChipFolder {
  private _chips: Array<Chip>;

  public static chipCapacity = 30;

  public get chips(): Array<Chip> {
    return this._chips;
  }

  constructor() {
    this._chips = [];
  }

  public addBattleChip(battleChip: BattleChip, codeIndex: number): void {
    if (this._chips.length >= ChipFolder.chipCapacity) return;
    this._chips.push({
      id: this.getEmptyId(),
      chipId: battleChip.id,
      codeIndex,
    });
  }

  public removeById(id: number): void {
    this._chips = this._chips.filter((c) => c.id !== id);
  }

  private getEmptyId(): number {
    const ids = this._chips.map((chip) => chip.id);
    for (let i = 1; i <= this._chips.length + 1; i += 1) {
      if (!ids.includes(i)) return i;
    }
    return 1;
  }
}
