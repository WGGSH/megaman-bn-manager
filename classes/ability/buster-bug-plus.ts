import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityBusterBugPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('buster-bug-plus', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `バスター空撃ちバグ${this.valueWithSign()}`;
  }
}
