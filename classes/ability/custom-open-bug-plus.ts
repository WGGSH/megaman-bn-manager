import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityCustomOpenBugPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('custom-open-bug-plus', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `カスタムオープンバグ${this.valueWithSign()}`;
  }
}
