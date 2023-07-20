import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityPanelBugPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('panel-bug-plus', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `移動時にパネルヒビ ${this.valueWithSign()}`;
  }
}
