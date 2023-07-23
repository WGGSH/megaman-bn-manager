import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityBattleHpBugChange extends AbilityBaseNumber {
  constructor(value: number) {
    super('battle-hp-bug-change', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  public valueToString(): string {
    return this._value > 0 ? `Lv: ${this.value}` : '修正';
  }

  toString(): string {
    return `バトル中HPバグ ${this.valueToString()}`;
  }
}
