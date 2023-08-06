import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityStatusBugPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('status-bug-plus', value);
  }

  public get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `ステータスバグ${this.valueWithSign()}`;
  }
}
