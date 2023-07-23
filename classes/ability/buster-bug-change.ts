import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityBusterBugChange extends AbilityBaseNumber {
  constructor(value: number) {
    super('buster-bug-change', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  public valueToString(): string {
    return this._value > 0 ? `Lv: ${this.value}` : '修正';
  }

  toString(): string {
    return `バスター空撃ちバグ${this.valueToString()}`;
  }
}
