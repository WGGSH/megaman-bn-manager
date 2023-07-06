import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityEncountBugPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('encount-bug-plus', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `エンカウントバグ${this.valueWithSign()}`;
  }
}
