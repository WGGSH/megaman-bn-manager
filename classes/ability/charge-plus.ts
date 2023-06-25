import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityChargePlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('charge-plus', value);
  }

  toString(): string {
    return `チャージ${this.valueWithSign()}`;
  }
}
