import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityBattleHpBugPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('battle-hp-bug-plus', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `バトル中HPバグ${this.valueWithSign()}`;
  }
}
