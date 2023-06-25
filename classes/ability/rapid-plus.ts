import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityRapidPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('rapid-plus', value);
  }

  toString(): string {
    return `ラピッド${this.valueWithSign()}`;
  }
}
