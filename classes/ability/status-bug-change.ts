import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityStatusBugChange extends AbilityBaseNumber {
  constructor(value: number) {
    super('status-bug-change', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  private get valueToString(): string {
    return this.isPositive ? '修正' : `Lv:${this.value}`;
  }

  toString(): string {
    return `ステータスバグ${this.valueToString}`;
  }
}
